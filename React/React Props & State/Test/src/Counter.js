import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    );
  }
}

export default Counter;
// MyClassComponent.js
// import React, { Component } from 'react';

// class MyClassComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h2>This is a Class Component</h2>
//         <p>You can add your component content here.</p>
//       </div>
//     );
//   }
// }

// export default MyClassComponent;