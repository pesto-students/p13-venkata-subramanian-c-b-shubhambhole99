// WithLogging.js
import React, { Component } from 'react';

const WithLogging = WrappedComponent => {
  return class extends Component {
    componentDidUpdate() {
      console.log(`Component ${WrappedComponent.name || 'Anonymous'} updated.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
