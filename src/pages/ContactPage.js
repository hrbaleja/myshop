import React from 'react';
import {  Container } from '@mui/material';
import ContactForm from '../components/contact/ContactForm';
import ChocolateGiftForm from '../components/Inqury/ChocolateGiftForm';


const ContactPage = () => {
  return (
    <Container >
      <ContactForm />
      <ChocolateGiftForm/>
    </Container>
  );
};

export default ContactPage;