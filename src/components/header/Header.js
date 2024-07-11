import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><Link to="home" smooth={true} duration={500}>Home</Link></NavItem>
        <NavItem><Link to="about" smooth={true} duration={500}>About</Link></NavItem>
        <NavItem><Link to="services" smooth={true} duration={500}>Service</Link></NavItem>
        <NavItem><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></NavItem>
        <NavItem><Link to="blog" smooth={true} duration={500}>Blog</Link></NavItem>
        <NavItem><Link to="contact" smooth={true} duration={500}>Contact</Link></NavItem>
      </NavList>
      <ContactButton>Contact me</ContactButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ContactButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

export default Header;
