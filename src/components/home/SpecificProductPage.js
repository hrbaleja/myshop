import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';
import { Grid, Paper, Typography, Box, Button,Container } from '@mui/material';
import AOS from 'aos';

const SpecificProductPage = ({ category, color }) => {
    console.log(color)
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((response) => {
                const filteredProducts = response.data.filter((product) => product.category.name === category);
                const limitedProducts = filteredProducts.slice(-4);
                setTimeout(() => {
                    setCategoryProducts(limitedProducts);
                    setLoading(false);
                    AOS.refresh();

                }, 1000);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, [category]);

    return (
        <Container>

            <Box p={2} sx={{ fontFamily: 'koho', color: `${color}`, }} >
                <Grid container spacing={2}>
                    <Grid item >
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: '800', fontFamily: 'koho' }} noWrap data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                            {category}
                        </Typography></Grid>
                </Grid>
                <hr data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" />
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    <Grid container spacing={2} mt={2} >
                        {categoryProducts.map((product, index) => (
                            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}
                                data-aos="fade-up"
                                data-aos-delay={`${index * 100}`}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.0)',
                                        backdropFilter: 'blur(5px)',
                                        'WebkitBackdropFilter': 'blur(5px)',
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginBottom: '16px',
                                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.18)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'scale(1.05)' },
                                    }}
                                >
                                    <img
                                        src={`https://mychocolate-api.vercel.app/api/v1/uploads/get-image/${product.image}`}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            marginBottom: '8px',
                                            borderRadius: '10px',


                                        }} data-aos="zoom-in"
                                    />
                                    <Typography variant="p" gutterBottom sx={{ color: `${color}`, fontWeight: '600' }} noWrap
                                        data-aos="flip-left"
                                    >
                                        {product.name}
                                    </Typography>
                                    <Box sx={{ margin: '0 1rem 1rem 0', display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="contained" color="textSecondary">
                                            {product.category.name}
                                        </Typography>
                                        <Typography variant="contained" color="primary" sx={{ color: '5f1000', fontWeight: '600' }}>
                                            ₹{product.price.toFixed(2)}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginRight: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined" color="primary" sx={{ fontFamily: 'koho' }} data-aos="fade-up">
                                                Details
                                            </Button>
                                        </Link>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>    </Container>

    );
};

export default SpecificProductPage;
