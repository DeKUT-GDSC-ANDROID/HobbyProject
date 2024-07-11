import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/footer/Footer';
import Services from './components/sections/services/Services';
import Portfolio from './components/sections/portfolio/Portfolio';
import Blog from './components/sections/blog/Blog';
import Contact from './components/sections/contact/Contact';
import Header from './components/header/Header';
import Home from './components/sections/home/Home';
import About from './components/sections/about/About';

const theme = {
  colors: {
    primary: '#007bff', 
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  fonts: {
    main: 'Arial, sans-serif',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
