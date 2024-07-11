import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>This is the contact section.</p>
        <form className="contact-form">
          <input type="text" className="contact-input" placeholder="Your Name" />
          <input type="email" className="contact-input" placeholder="Your Email" />
          <textarea className="contact-textarea" placeholder="Your Message"></textarea>
          <button className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
