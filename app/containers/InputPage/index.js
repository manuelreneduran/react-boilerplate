/*
 * InputPage
 *
 * This page allows users to input a string and send to server
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectInput,
  makeSelectError,
  makeSelectLoading,
  makeSelectComplete,
} from './selectors';
import InputLabel from '../../components/InputLabel';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { changeStringInput, addString } from './actions';
import reducer from './reducer';
import messages from './messages';
import saga from './saga';

const key = 'inputPage';

function InputPage({
  stringInput,
  onInputChange,
  onSubmitForm,
  error,
  loading,
  complete,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const inputLabelProps = {
    loading,
    error,
  };
  return (
    <div>
      <Helmet>
        <title>Input Page</title>
        <meta name="description" content="An input page" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <h3>
        <FormattedMessage {...messages.pageInfoMessage} />
      </h3>
      <form onSubmit={onSubmitForm}>
        <input
          onChange={onInputChange}
          value={stringInput}
          type="text"
          placeholder="Add a string name"
        />
        <button type="submit">Add string</button>
        {complete && <InputLabel {...inputLabelProps} />}
      </form>
    </div>
  );
}

InputPage.propTypes = {
  stringInput: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  stringInput: makeSelectInput(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
  complete: makeSelectComplete(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onInputChange: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(changeStringInput(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addString());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(InputPage);
