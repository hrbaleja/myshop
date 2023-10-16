import React from 'react';
import Slider from 'react-slick';

export default function PackingImageCarousel({ imageUrls }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // Show only one image per slide
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const imageStyle = {
    cursor: 'pointer', 
    width: '100%',
    height: 'auto',
    
  };

  return (
    <div>
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img  src={`https://mychocolate-api.vercel.app/api/v1/uploads/get-image/${imageUrl}`} alt={`Packing ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
