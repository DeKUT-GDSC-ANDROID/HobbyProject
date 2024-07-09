import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container>
        <h2>Portfolio</h2>
        <p>This is the portfolio section.</p>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export default Portfolio;
