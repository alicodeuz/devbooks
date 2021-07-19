import React from 'react';
import PropTypes from 'prop-types';

export default function Loader({ loading }) {
  if (loading) {
    return (
      <div>
        Loading....
      </div>
    )
  }
  return null;
}

Loader.defaultProps = {
  loading: false,

  user: {
    name: 'Anuan',
    age: 12
  }
}

Loader.propTypes = {
  loading: PropTypes.oneOf([true, false]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ids: PropTypes.arrayOf(PropTypes.number),
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }).isRequired
}