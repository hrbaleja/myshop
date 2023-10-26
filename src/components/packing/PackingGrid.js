import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import { WhatsappShareButton } from 'react-share';

const handleWhatsAppClick = (productName) => {
  const phoneNumber = '+919664759611'; 
  const message = `I'm interested in ${productName}. Please provide more details.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

const PackingGrid = () => {
  const [packingData, setPackingData] = useState([]);

  useEffect(() => {
    fetch('https://mychocolate-api.vercel.app/api/v1/packages')
      .then((response) => response.json())
      .then((data) => setPackingData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box p={2} sx={{minHeight:'80vh'}}>
      <Grid container spacing={2}>
        {packingData.map((packing) => (
          <Grid item key={packing.id} xs={12} sm={6} md={4} lg={3}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '16px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(7.5px)',
                'WebkitBackdropFilter': 'blur(7.5px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <img
                src={'https://mychocolate-api.vercel.app/api/v1/uploads/get-image/image-1698233916426.png'}
                alt={packing.name}
                style={{
                  objectFit: 'cover',
                  marginBottom: '8px',
                  borderRadius: '10px',
                }}
              />
              <Typography variant="h6" gutterBottom  sx={{color:'navy'}}>
                {packing.name}
              </Typography>
              <Typography variant="h6" color="primary">
                ₹{packing.price.toFixed(2)}
              </Typography>

              <Box sx={{ marginRight: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} to={`/packing/${packing._id}`} variant="outlined" color="primary">
                  Details
                </Button>
                <WhatsappShareButton
                  url={`https://example.com/product/${packing.id}`}
                  title={packing.name}
                  separator=" - "
                  onClick={() => handleWhatsAppClick(packing.name)}
                >
                  <Button variant="contained" color="success">
                    WhatsApp
                  </Button>
                </WhatsappShareButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PackingGrid;
