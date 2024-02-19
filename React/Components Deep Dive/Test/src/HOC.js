import React from 'react';

const withLogger = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted.`);
      console.log(this.props)
    }

    render() {
        
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogger;