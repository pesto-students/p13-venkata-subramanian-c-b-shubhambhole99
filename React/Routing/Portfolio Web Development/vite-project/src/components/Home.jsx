import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a brief introduction about myself.</p>
      {/* You can add your name, description, profile picture, etc. */}
    <Link to="/">Home</Link>
    <br></br>
    <Link to="/projects">projects</Link>
    <br></br>
    <Link to="/contact">contact</Link>
    <br></br>
    <Link to="/skills">skills</Link>
    <br></br>
    <Link to="/blog">blog</Link>
    </div>
  );
}

export default Home;