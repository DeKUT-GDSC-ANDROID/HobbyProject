// src/App.js
import React from 'react';
import './App.css';
import Navbar from './blog/components/Navbar.js';
import BlogList from './blog/components/BlogList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogList />
    </div>
  );
}

export default App;
