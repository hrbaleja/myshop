import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import { Typography, Container, Button, Box, Grid } from '@mui/material';
import { WhatsappShareButton } from 'react-share';
import HomeRecent from '../home/HomeRecent';

const handleWhatsAppClick = (productName, selectedWeight) => {
  const phoneNumber = '+919664759611';
  const message = `I'm interested in ${productName} - ${selectedWeight}. Please provide more details.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
};

const ProductDetails = () => {
  const { itemNumber } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState('100g');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isJarSelected, setIsJarSelected] = useState(false);


  useEffect(() => {
    const productAPIUrl = `https://mychocolate-api.vercel.app/api/v1/product/${itemNumber}`;
    fetch(productAPIUrl)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error fetching product data: ', error);
      });
  }, [itemNumber]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://mychocolate-api.vercel.app/api/v1/packages")
      .then(response => response.json())
      .then(data => {
        // Filter products based on the desired product ID
        const filteredProducts = data.filter(product =>
          product.products.some(p => p._id === itemNumber)
        );
        setFilteredProducts(filteredProducts);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [itemNumber]);

  const calculatePrice = () => {
    let basePrice = product.price / 100; // Base price per 1g
    if (isJarSelected) {
      basePrice += 0.10; // Increase the price by 10 rupees for jar packaging
    }
    return (basePrice * parseFloat(selectedWeight)).toFixed(2);
  };



  if (!product) {
    return <div>Loading...</div>;
  }
  const newPrice = calculatePrice();

  const handleJarButtonClick = () => {
    setIsJarSelected(true);
  };

  const handlePackageButtonClick = () => {
    setIsJarSelected(false);
  };
  const handleWeightButtonClick = (weight) => {
    setSelectedWeight(weight);
  };
  // Adjust the price calculation to be per 1g
  // const pricePer1g = (product.price / 100).toFixed(2);
  // const newPrice = (pricePer1g * parseFloat(selectedWeight)).toFixed(2);

  return (
    <div  >
    <Container maxWidth="lg" sx={{minHeight:'70vh'}}>
        <Grid container spacing={2} sx={{ margin: '20px 0' }}>
          <Grid item xs={12} sm={6} sx={{ paddingRight: '1rem' }}>
            <img
              src={`https://mychocolate-api.vercel.app/api/v1/uploads/get-image/${product.image}`}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(7.5px)',
                WebkitBackdropFilter: 'blur(7.5px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            />

            <Box
              sx={{
                marginRight: '1rem',
                marginTop: '1rem'
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/product')}
                    style={{ marginRight: '5px', width: '100%' }}
                  >
                    Go Back
                  </Button>
                  
                </Grid>
                <Grid item xs={6}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <WhatsappShareButton
                      url={`https://example.com/product/${product.id}`}
                      title={product.name}
                      separator=" - "
                      onClick={() => handleWhatsAppClick(product.name, selectedWeight)}
                    >
                      <Button variant="contained" color="success" style={{ width: '100%', }}>
                        WhatsApp
                      </Button>
                    </WhatsappShareButton>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h4" gutterBottom  sx={{ color: '#5f1000', fontWeight: '600' }}  >
              <strong>{product.name}</strong>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Batch No: </strong>{product.batchno}
            </Typography>
          
            <Typography variant="body1" paragraph>
              <strong>Category: </strong>  {product.category.name}
            </Typography>
            <Typography variant="body1" paragraph  sx={{ color: '#5f1000', fontWeight: '600' }}>
              <strong>Price :</strong > ₹{newPrice}
            </Typography>

            {product.weights && (
              <div>
                <Typography variant="body1">
                  <strong>Available Weight:</strong>
                  {product.weights.map((weight, index) => (
                   <Button
                   key={index}
                   variant="outlined"
                   style={{
                     margin: '8px',
                     color: selectedWeight === weight ? ' #5f1000' : ' #1976d2',
                   }}
                   onClick={() => handleWeightButtonClick(weight)}
                 >
                   {weight}
                 </Button>
                  ))}
                </Typography>
              </div>
            )}

            <div>
            <Typography variant="body1">
          <strong>Available Packing:</strong>
          <Button
            variant="outlined"
            style={{ margin: '8px', color: isJarSelected ? '#1976d2' : '#5f1000' }}
            onClick={handlePackageButtonClick}
          >
            Package
          </Button>
          <Button
            variant="outlined"
            style={{ margin: '8px', color: isJarSelected ? '#5f1000' : '#1976d2' }}
            onClick={handleJarButtonClick}
          >
            Jar
          </Button>
        </Typography>
            </div>


            <Typography variant="body1" paragraph textAlign="justify">
              <strong>Description:</strong> {product.description}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Barcode: </strong>{product.barcode}
            </Typography>
            {filteredProducts && filteredProducts.length > 0 && (
              <div>
                <Typography variant="body1">
                  <strong>Available  Package:</strong>
                  {filteredProducts.map((product, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      style={{ margin: '8px' }}
                      href={`/packing/${product._id}`}
                    >
                      {product.name}
                    </Button>
                  ))}
                </Typography>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
        <Typography variant="h4" component="h2" style={{ padding: '10px 0 0 20px', textAlign: 'center', fontFamily: 'Lora' }}>
        Similar Products

        </Typography>
      </Grid>
      <HomeRecent />
    </div>

  );
};

export default ProductDetails;
