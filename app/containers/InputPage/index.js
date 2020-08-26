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
import { changeStringInput, addString, addStringFailure } from './actions';
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
  setError,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const validate = e => {
    e.preventDefault();
    if (stringInput.length === 0) {
      setError({ content: 'You must have at least one character' });
    } else {
      onSubmitForm();
    }
  };

  const inputLabelProps = {
    error,
    loading,
    complete,
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
      <form onSubmit={e => validate(e)}>
        <input
          onChange={onInputChange}
          value={stringInput}
          type="text"
          placeholder="Add a string name"
        />
        <button type="submit">Add string</button>
        <InputLabel {...inputLabelProps} />
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
    onSubmitForm: () => {
      dispatch(addString());
    },
    setError: err => {
      dispatch(addStringFailure(err));
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
