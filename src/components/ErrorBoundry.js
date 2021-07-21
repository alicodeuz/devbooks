import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_MESSAGE = 'Something went wrong';

export default class ErrorBoundry extends Component {
  state = {
    errorMsg: '',
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    return ({ hasError: true, errorMsg: error.message });
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log('Error info ', info);
  }

  render() {
    const { errorMsg, hasError } = this.state;
    const { msg, hideMessage } = this.props;

    if (hasError) {
      return (
        <h1>
          {hideMessage ? DEFAULT_MESSAGE : msg || errorMsg}
        </h1>
      )
    }
    return this.props.children
  }
}

ErrorBoundry.defaultProps = {
  hideMessage: true,
}

ErrorBoundry.propTypes = {
  msg: PropTypes.string,
  hideMessage: PropTypes.bool,
}