import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import LoadingIndicator from '../LoadingIndicator';

function InputLabel({ error, loading }) {
  let content;
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    content = 'Failed to process';
  } else {
    content = 'Success!';
  }

  return <Label error={error}>{content}</Label>;
}

Label.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default InputLabel;
