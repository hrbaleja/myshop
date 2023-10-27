import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios'; // Import Axios or another HTTP library
import Carousel from './Carousel';
import { Grid } from '@mui/material';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an HTTP request to fetch the product data from the API
    axios.get('https://mychocolate-api.vercel.app/api/v1/product')
      .then((response) => {
        
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <Grid alignItems='center' justifyContent='center'>
      <Slider {...settings}>
        {products.slice(-4).map((product, index) => (
          <div key={index}>
            <Carousel product={product}  color={'fff000'}/>
          </div>
        ))}
      </Slider></Grid>
    </div>
  );
};

export default ProductCarousel;
