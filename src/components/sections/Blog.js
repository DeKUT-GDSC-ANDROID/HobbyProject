import React from 'react';
import styled from 'styled-components';

const Blog = () => {
  return (
    <Section id="blog">
      <Container>
        <h2>Blog</h2>
        <p>This is the blog section.</p>
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

export default Blog;
