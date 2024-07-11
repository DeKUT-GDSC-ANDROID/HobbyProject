import React from 'react';
import './Services.css';
import { FaDesktop, FaMobileAlt, FaCode, FaPalette, FaCamera, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaDesktop className="service-icon" />
            <h3>Web Design</h3>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Fully Responsive</h3>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever.</p>
          </div>
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Development</h3>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever.</p>
          </div>
          <div className="service-card">
            <FaPalette className="service-icon" />
            <h3>Creative Design</h3>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever.</p>
          </div>
          <div className="service-card">
            <FaCamera className="service-icon" />
            <h3>Retina Ready</h3>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever.</p>
          </div>
          <div className="service-card">
            <FaBullhorn className="service-icon" />
            <h3>Branding</h3>
            <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
