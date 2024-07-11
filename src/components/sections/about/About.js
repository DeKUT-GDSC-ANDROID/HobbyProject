import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I have extensive experience in backend development with Java and Android development using Kotlin. I love creating efficient and scalable software solutions.
            </p>
          </div>
          <div className="about-image-container">
            <img src="https://via.placeholder.com/300" alt="About Me" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
