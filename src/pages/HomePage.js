import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { getCategories } from '../components/services/categoryService';
import SpecificProductPage from '../components/home/SpecificProductPage';
import Page from '../components/home/History';
import Slider from '../components/home/Slider';
import ProductSlider from '../components/home/Popular';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
        console.log(response.data)
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
    <div>
      {/* Image Slider */}
      <Slider />
      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="fade-down " data-aos-duration="1000" data-aos-delay="100" >
        <Typography variant="h4" component="h2" style={{ padding: '10px 0 0 20px', fontFamily: 'koho', textAlign: 'center' }}>
          EXPLORE OUR  PRODUCT

        </Typography>
      </Grid>
      <ProductSlider />


      {/* History Page */}
      <Page />


      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="fade-down " data-aos-duration="1000" data-aos-delay="100" >
        <Typography variant="h5" component="h2" style={{ padding: '10px 0 0 20px', fontWeight: "bold", textAlign: 'center' }}>
          Popular Product
        </Typography>
      </Grid>
      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' >
        {categories.slice(0, 4).map((category, index) => (
          <div key={category._id} >
            <SpecificProductPage category={category.name} color={colorStyles[index]} />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;