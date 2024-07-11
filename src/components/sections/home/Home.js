import React from 'react';
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="profile">
          <div className="image-container">
            <img src="https://via.placeholder.com/150" alt="Trecy Malonza" />
          </div>
          <div className="text-content">
            <h1>Trecy Malonza <span role="img" aria-label="wave">👋</span></h1>
            <h2>Software Engineer</h2>
            <p>I'm a Senior Software Engineer based in Nairobi, and I'm very passionate and dedicated to my work.</p>
            <div className="buttons">
              <button className="button primary">Say Hello</button>
              <button className="button">My Works</button>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaBehance /></a>
              <a href="#" className="social-icon"><FaDribbble /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
