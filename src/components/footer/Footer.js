import React from 'react';
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="#" className="social-icon"><FaBehance /></a>
        <a href="#" className="social-icon"><FaDribbble /></a>
        <a href="#" className="social-icon"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
