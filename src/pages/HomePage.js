import React from 'react';

import Carousel from '../components/home/Carousel';
import PropularProduct from '../components/home/HomeProduct';
import CorporateGiftBox from '../components/home/CorporateGiftBox';
import HomeCategory from '../components/home/HomeCategory';
import History from '../components/home/History';
import HomeRecent from '../components/home/HomeRecent';

const HomePage = () => {
  return (
    <div style={{ overflow: 'hidden' }}>

      {/*Carousel Image Section */}
      <Carousel />

      {/* Popular Products Section */}
      <PropularProduct />

      {/*Corporate GiftBox Section */}
      <CorporateGiftBox />

      {/*Category GiftBox Section */}
      <HomeCategory />

      {/* History Page */}
      <History />

      {/* Recent Products Section */}
      <HomeRecent />



      {/* <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="fade-down " data-aos-duration="1000" data-aos-delay="100" >
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
      </Grid> */}
    </div>
  );
};

export default HomePage;