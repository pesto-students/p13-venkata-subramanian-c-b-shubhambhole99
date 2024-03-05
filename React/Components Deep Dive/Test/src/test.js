import React from 'react';

// JSX Elements and Attributes
const header = <h1 className="header">Welcome to My App</h1>;

// JavaScript Expression
const currentTime = new Date().toLocaleTimeString();
const timeMessage = <p>The current time is: {currentTime}</p>;

// React Component
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

// Self-Closing Tags
const image = <img src="example.jpg" alt="Example" />;

// Parent Component
function Test() {
  const userName = 'Alice';

  // Event Handler
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {header}
      {timeMessage}
      <Greeting name={userName} />
      {image}
      <button className="btn" onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Test;
