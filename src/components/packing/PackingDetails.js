import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import { Typography, Container, Button, Box, Grid } from '@mui/material';
import PackingImageCarousel from './PackingImageCarousel';
import { WhatsappShareButton } from 'react-share';

const handleWhatsAppClick = (productName, selectedWeight) => {
  const phoneNumber = '+919664759611'; // Replace with the desired WhatsApp number
  const message = `I'm interested in ${productName} - ${selectedWeight}. Please provide more details.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const PackingDetails = () => {
  const { packingId } = useParams();
  const navigate = useNavigate();
  const [packingData, setPackingData] = useState(null); // State to store the fetched data

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://mychocolate-api.vercel.app/api/v1/packages/${packingId}`)
      .then((response) => response.json())
      .then((data) => {
        setPackingData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [packingId]);

  if (!packingData) {
    return <div>Loading...</div>;
  }

  // Assuming 'imageUrls' is an array of image URLs in your packing data
  return (
    <Box p={2}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* Cursor Section */}
            <PackingImageCarousel imageUrls={packingData.images} />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Information Section */}
            <Typography variant="h4" component="h1" gutterBottom>
              {packingData.name}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Packing ID:</strong> {packingData._id}
            </Typography>
            

            {packingData.products && (
            <div>
              <Typography variant="h6">
                <strong>Items:</strong><br></br>
                {packingData.products.map((product, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    style={{ margin: '8px 8px 8px 0 ' }}
                    href={`/product/${product._id}`}
                  >
                    {product.name}
                  </Button>
                ))}
              </Typography>
            </div>
          )}
            
            <Typography variant="body1" paragraph>
              <strong>Total Price:</strong> ${packingData.price.toFixed(2)}
            </Typography>

            <Box sx={{ marginRight: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color="primary" onClick={() => navigate('/packing')}>
                Go Back
              </Button>

              <WhatsappShareButton
                url={`https://example.com/product/${packingData._id}`}
                title={packingData.name}
                separator=" - "
                onClick={() => handleWhatsAppClick(packingData.name)}
              >
                <Button variant="contained" color="success">
                  WhatsApp
                </Button>
              </WhatsappShareButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PackingDetails;
