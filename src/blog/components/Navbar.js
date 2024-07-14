import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MkMedia</div>
      <div className="navbar-links">
        <a className="active" href="#blog">Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
