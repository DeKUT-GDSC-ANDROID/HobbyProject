import React from 'react';
import styled from 'styled-components';
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIcon href="#"><FaBehance /></SocialIcon>
        <SocialIcon href="#"><FaDribbble /></SocialIcon>
        <SocialIcon href="#"><FaInstagram /></SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin: 1rem 0;
`;

const SocialIcon = styled.a`
  color: #fff;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Footer;
