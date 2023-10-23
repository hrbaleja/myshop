import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button, TextField, CircularProgress, InputLabel, styled, Box, FormControl, Select, MenuItem, InputAdornment, IconButton, colors } from '@mui/material';
import { Search } from '@mui/icons-material';
import { WhatsappShareButton } from 'react-share';
import { Link } from 'react-router-dom';

import { getProducts } from '../services/productService';
import { getCategories } from '../services/categoryService'

const handleWhatsAppClick = (productName) => {
  const phoneNumber = '9664759611';
  const message = `I'm interested in ${productName}. Please provide more details.`;
  const whatsappUrls = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrls, '_blank');
};

const useStyles = styled((theme) => ({
  productCard: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  productImage: {
    width: '100%',
    maxHeight: 200,
    objectFit: 'cover',
  },
  button: {
    margin: theme.spacing(2),
  },
  loadingContainer: {},
  filterForm: {
    marginBottom: theme.spacing(2),
  },
}));

const ProductGrid = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('Relevance');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data);
    })
      .catch((error) => {
        console.error('Error fetching categories: ', error);
      });

    getProducts().then((response) => {
      setProducts(response.data);
      setLoading(false);
    })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });

  }, []);

  const sortProducts = (order) => {
    setSortOrder(order);
    let sortedProducts = [...products];
    if (order === 'Low to High') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'High to Low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };


  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };
  const filterProductsBySearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Box p={2} style={{color:'navy'}}>
      <Grid container spacing={2}>
        <Grid container spacing={2} mt={0} mb={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <TextField sx={{color:'navy'}}
                fullWidth
                label="Search by Name"
                // color='navy'
                value={searchQuery}
                onChange={(e) => filterProductsBySearch(e.target.value)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth  sx={{color:'navy'}}>
              <InputLabel  sx={{color:'navy'}}>Sort By</InputLabel>
              <Select value={sortOrder} label="Sort By" onChange={(e) => sortProducts(e.target.value)}  sx={{color:'navy'}}>
                <MenuItem value="Relevance"  sx={{color:'navy'}}>Relevance</MenuItem>
                <MenuItem value="Low to High"  sx={{color:'navy'}}>Price: Low to High</MenuItem>
                <MenuItem value="High to Low"  sx={{color:'navy'}}>Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel  sx={{color:'navy'}}>Categories</InputLabel>
              <Select value={selectedCategory} label="Categories" onChange={(e) => filterProductsByCategory(e.target.value)}  sx={{color:'navy'}}>
                <MenuItem value="All Categories"  sx={{color:'navy'}}>All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category.name}  sx={{color:'navy'}}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {loading ? (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <CircularProgress />
            </Box>
          </Grid>
        ) : (
          products
            .filter((product) =>
              (selectedCategory === 'All Categories' || product.category.name === selectedCategory) &&
              (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            .map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
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
                    className={classes.productImage}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      marginBottom: '8px',
                      borderRadius: '10px',
                    }}
                  />
                  <Typography variant="p" gutterBottom  sx={{color:'navy'}}>
                    {product.name}
                  </Typography>
                  <Box sx={{ margin: ' 0 1rem 1rem 0', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="contained" color="textSecondary" >
                      {product.category.name}
                    </Typography>
                    <Typography variant="contained" color="primary">
                      ₹{product.price.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box sx={{ marginRight: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" color="primary">
                        Details
                      </Button>
                    </Link>
                    <WhatsappShareButton
                      url={`https://example.com/product/${product._id}`}
                      title={product.name}
                      separator=" - "
                      onClick={() => handleWhatsAppClick(product.name)}
                    >
                      <Button variant="contained" color="success">
                        WhatsApp
                      </Button>
                    </WhatsappShareButton>
                  </Box>
                </Paper>
              </Grid>
            ))
        )}
      </Grid>
    </Box>
  );
};
export default ProductGrid;
