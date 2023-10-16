import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import HeroImage from '../components/home/HeroImage';

import ProductCarousel from '../components/home/ProductCarousel';

const HomePage = () => {
  return (
    <Container>
      <HeroImage />
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight='bold'>
       Recent Products
      </Typography>
      <br></br>
      <ProductCarousel />

      <br></br>

      <br></br>
      <Typography variant="h4" gutterBottom>
        Welcome to My Website
      </Typography>
      <Typography variant="body1">
        This is the home page of our website.
        You can add content and components here to showcase your project or provide information about your services or products.
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Learn More
      </Button>

    </Container>
  );
};

export default HomePage;