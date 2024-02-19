import React from 'react';
import withLogger from './HOC';

class MyComponent extends React.Component {
  render() {
    return <div>Hello from MyComponent</div>;
  }
}

const MyComponentWithLogger = withLogger(MyComponent);

export default MyComponentWithLogger;