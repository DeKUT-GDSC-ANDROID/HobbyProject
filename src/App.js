import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
