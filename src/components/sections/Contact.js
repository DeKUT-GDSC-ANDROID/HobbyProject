import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <h2>Contact</h2>
        <p>This is the contact section.</p>
        <Form>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message"></Textarea>
          <Button>Send Message</Button>
        </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 80%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 150px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
`;

export default Contact;
