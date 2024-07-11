import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h2>Blog</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="https://via.placeholder.com/300" alt="Blog Post 1" className="blog-image" />
            <div className="blog-content">
              <h3>Blog Post 1</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://via.placeholder.com/300" alt="Blog Post 2" className="blog-image" />
            <div className="blog-content">
              <h3>Blog Post 2</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://via.placeholder.com/300" alt="Blog Post 3" className="blog-image" />
            <div className="blog-content">
              <h3>Blog Post 3</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://via.placeholder.com/300" alt="Blog Post 4" className="blog-image" />
            <div className="blog-content">
              <h3>Blog Post 4</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://via.placeholder.com/300" alt="Blog Post 5" className="blog-image" />
            <div className="blog-content">
              <h3>Blog Post 5</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://via.placeholder.com/300" alt="Blog Post 6" className="blog-image" />
            <div className="blog-content">
              <h3>Blog Post 6</h3>
              <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
