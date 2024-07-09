import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <h2>Services</h2>
        <p>This is the services section.</p>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export default Services;
