import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';
import { getProducts } from '../services/productService';

const useStyles = styled((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'koho',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const HomeRecent = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: '0 1rem 2.5rem 1rem' }}>
      <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
        <Typography variant="h4" component="h2" style={{ padding: '10px 0 0 20px', textAlign: 'center', fontFamily: 'Lora' }}>
          NEW LAUNCHES PRODUCT
        </Typography>
      </Grid>
      <hr data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" />

      <Grid container spacing={2}>
        {loading ? (
          <p>Loading...</p>
        ) : (
            products.slice(-6).map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={product._id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  height="200"
                  width="180"
                  image={`https://mychocolate-api.vercel.app/api/v1/uploads/get-image/${product.image}`}
                  alt={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="P1" component="div" style={{ color: '#917236', fontFamily: 'koho' }}>
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default HomeRecent;
