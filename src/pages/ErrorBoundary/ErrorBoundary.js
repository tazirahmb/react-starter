import React from 'react';
import { object } from 'prop-types';

export default class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(/*error*/) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Error</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: object.isRequired,
};
