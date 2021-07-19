import React from 'react';
import PropTypes from 'prop-types';

export default function InputErrorMessages({ type, errorObj }) {
  if (type !== errorObj.type) {
    return null
  };

  return (
    <div className="has-error">
      {errorObj.message}
    </div>
  )
}

InputErrorMessages.propTypes = {
  type: PropTypes.string,
  errorObj: PropTypes.object,
}