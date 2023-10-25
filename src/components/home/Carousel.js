import { React, } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';



const DivContainer = styled('div')(({ theme }) => ({
    padding: '0 20px',
    borderRadius: '20px',
    margin: '1rem 0',
}));

function Carousel({ product }) {
    const { name, image, _id } = product;
    return (
        <DivContainer>
            <Box elevation={3}>
                <Grid container spacing={3} sx={{ marginRight: '1rem', display: 'flex' }}>
                    <Grid sx={{ margin: '0 20px' }}>
                        <img
                            src={`https://mychocolate-api.vercel.app/api/v1/uploads/get-image/${image}`}
                            alt={name}
                            style={{ width: '100%', maxWidth: 200, }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: '0 20px' }}>
                        <Typography variant="h6" component="h6" >
                            {name}
                        </Typography>
                        <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{ margin: '10px 0', color: "#FFFFFF", backgroundColor: '#792b0f' }}>
                                View Product
                            </Button>
                        </Link>

                    </Grid>
                </Grid>
            </Box>
        </DivContainer>
    );
}

export default Carousel;
