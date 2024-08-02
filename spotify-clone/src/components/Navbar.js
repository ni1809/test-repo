import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Spotify Clone</h1>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#search">Search</a>
        <a href="#library">Your Library</a>
      </div>
    </nav>
  );
};

export default Navbar;
