import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import HeroImage from '../components/home/HeroImage';

import ProductCarousel from '../components/home/ProductCarousel';
import CategorySlider from '../components/home/CategorySlider';

const HomePage = () => {
  return (
    <Container>
      <HeroImage />
      
      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' >
        <Typography variant="h5" component="h2" style={{ padding: '10px 0 0 20px', fontWeight: "bold", textAlign: 'center' }}>
          Popular Product
        </Typography>
      </Grid>

      <CategorySlider />
      <Grid container spacing={2} mt={3} mb={2} justifyContent='center' >
        <Typography variant="h5" component="h2" style={{ padding: '10px 0 0 20px', fontWeight: "bold", textAlign: 'center' }}>
          Recent Products
        </Typography>
      </Grid>
      <Grid alignContent='center'   >
        <ProductCarousel />
      </Grid>




    </Container>
  );
};

export default HomePage;