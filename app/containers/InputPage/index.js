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
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import Input from '../../components/Input';
import InputLabel from '../../components/InputLabel';
import useFormValidation from '../../hooks/useFormValidation';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { changeStringInput, addString, addStringFailure } from './actions';
import reducer from './reducer';
import messages from './messages';
import CenteredSection from './CenteredSection';
import FormContent from './FormContent';
import Form from './Form';
import saga from './saga';
import validate from './validateInput';

const key = 'inputPage';

function InputPage({
  stringInput,
  onInputChange,
  onSubmitForm,
  error,
  loading,
  complete,
  setErrors,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { handleBlur, handleSubmit } = useFormValidation(
    stringInput,
    setErrors,
    validate,
    onSubmitForm,
  );

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
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <H3>
        <FormattedMessage {...messages.pageInfoMessage} />
      </H3>
      <CenteredSection>
        <Form onSubmit={e => handleSubmit(e)}>
          <FormContent>
            <Input
              onBlur={handleBlur}
              onChange={onInputChange}
              value={stringInput}
              type="text"
              placeholder="Add a string name"
              error={error}
            />
          </FormContent>

          <FormContent>
            <button type="submit">Add string</button>
          </FormContent>

          <FormContent>
            <InputLabel
              {...inputLabelProps}
              content="Success - go check out your strings!"
            />
          </FormContent>
        </Form>
      </CenteredSection>
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
    setErrors: err => {
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
