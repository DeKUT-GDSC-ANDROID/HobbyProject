import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Light</div>
      <div className="navbar-links">
        <a className="" href="#">Home</a> 
        <a className="active" href="#blog">Blog</a>
        <a className="" href="#">Portfolio</a>
        <a className="" href="#">Podcast</a>
        <a className="" href="#">Videos</a>
      </div>
    </nav>
  );
};

export default Navbar;
