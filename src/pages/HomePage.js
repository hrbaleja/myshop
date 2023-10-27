import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import HeroImage from '../components/home/HeroImage';
import { getCategories } from '../components/services/categoryService';
import CategorySlider from '../components/home/CategorySlider';
import SpecificProductPage from '../components/home/SpecificProductPage';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories: ', error);
      });
  }, []);

  const colorStyles = [
    'hsl(49, 100%, 54%)',
    'hsl(82, 81%, 52%)',
    'hsl(169, 50%, 44%)',
    'hsl(332, 94%, 67%)',
  ];
  return (
    <Container >
      <HeroImage />
      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="fade-down " data-aos-duration="1000" data-aos-delay="100" >
        <Typography variant="h5" component="h2" style={{ padding: '10px 0 0 20px', fontWeight: "bold", textAlign: 'center' }}>
          Popular Product
        </Typography>
      </Grid>
      <CategorySlider />
      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' >
        {categories.slice(-4).map((category, index) => (
          <div key={category._id} >
            <SpecificProductPage category={category.name} color={colorStyles[index]} />
          </div>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;