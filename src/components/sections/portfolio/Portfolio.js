import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300" alt="Project 1" className="portfolio-image" />
            <div className="portfolio-content">
              <h3>Project 1</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300" alt="Project 2" className="portfolio-image" />
            <div className="portfolio-content">
              <h3>Project 2</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300" alt="Project 3" className="portfolio-image" />
            <div className="portfolio-content">
              <h3>Project 3</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300" alt="Project 4" className="portfolio-image" />
            <div className="portfolio-content">
              <h3>Project 4</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300" alt="Project 5" className="portfolio-image" />
            <div className="portfolio-content">
              <h3>Project 5</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="portfolio-card">
            <img src="https://via.placeholder.com/300" alt="Project 6" className="portfolio-image" />
            <div className="portfolio-content">
              <h3>Project 6</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
