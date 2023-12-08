import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';

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

const items = [
    { id: 1, name: 'Cranberrie', imageUrl: 'https://mychocolate-api.vercel.app/api/v1/uploads/get-image/image-1698233122943.jpg' },
    { id: 2, name: 'Strawberrie', imageUrl: 'https://mychocolate-api.vercel.app/api/v1/uploads/get-image/image-1698233078418.jpg' },
    { id: 3, name: 'Energy Drink', imageUrl: 'https://mychocolate-api.vercel.app/api/v1/uploads/get-image/image-1698233867179.png' },
    { id: 4, name: 'Pistachio', imageUrl: 'https://mychocolate-api.vercel.app/api/v1/uploads/get-image/image-1698232690841.jpg' },
    { id: 5, name: 'Coated Almonds', imageUrl: 'https://mychocolate-api.vercel.app/api/v1/uploads/get-image/image-1698231872106.jpg' },
    { id: 6, name: 'Eviya Plup N Juice', imageUrl: 'https://mychocolate-api.vercel.app/api/v1/uploads/get-image/image-1698233916426.png' },
];

const PropularProduct = () => {
    const classes = useStyles();
    return (
        <div   style={{ backgroundColor: '#f7f7f7',  padding: '0 1rem 2.5rem 1rem' }}>
            <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
                <Typography variant="h4" component="h2" style={{ padding: '10px 0 0 20px', textAlign: 'center', fontFamily: 'Lora' }}>
                    EXPLORE OUR  PRODUCT
                </Typography>
            </Grid>
            <hr data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" />

            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                component="img"
                                height="200"
                                width="180"
                                image={item.imageUrl}
                                alt={item.name}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h6" component="div" style={{ color: '#917236', fontFamily: 'koho' }}>
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PropularProduct;
