import React from 'react';
import styled from 'styled-components';
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Profile>
          <ImageContainer>
            <img src="https://via.placeholder.com/150" alt="Emmanuel Mutua" />
          </ImageContainer>
          <TextContent>
            <h1>Emmanuel Mutua <span role="img" aria-label="wave">👋</span></h1>
            <h2>Backend Engineer</h2>
            <p>I'm a creative Backend Engineer based in New York, and I'm very passionate and dedicated to my work.</p>
            <Buttons>
              <Button primary>Say Hello</Button>
              <Button>My Works</Button>
            </Buttons>
            <SocialIcons>
              <SocialIcon href="#"><FaBehance /></SocialIcon>
              <SocialIcon href="#"><FaDribbble /></SocialIcon>
              <SocialIcon href="#"><FaInstagram /></SocialIcon>
            </SocialIcons>
          </TextContent>
        </Profile>
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

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const TextContent = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : '#fff'};
  color: ${({ primary, theme }) => primary ? '#fff' : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  border-radius: 4px;
`;

const SocialIcons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: #333;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Home;
