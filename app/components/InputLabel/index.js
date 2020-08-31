import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import LoadingIndicator from '../LoadingIndicator';

function InputLabel({ error, loading, complete, content }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    content = error.content || error;
  }

  return (
    <>
      {' '}
      {complete && (
        <Label data-testid="string-input" error={error}>
          {content}
        </Label>
      )}{' '}
    </>
  );
}

Label.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  complete: PropTypes.bool,
  content: PropTypes.string,
  forLabel: PropTypes.string,
};

export default InputLabel;
