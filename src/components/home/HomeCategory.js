import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';
import DryFruit from '../Images/Category/DryFruit.jpg'
import Seed from '../Images/Category/Seed.jpg'
import Chocolate from '../Images/Category/Chocolate.jpg'
import DriedFruit from '../Images/Category/DriedFruit.jpg'
import Juice from '../Images/Category/Juice.jpg'
import Bite from '../Images/Category/Bite.jpg'



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
    { id: 1, name: 'Dry Fruits', imageUrl: DryFruit },
    { id: 2, name: 'Chocolate', imageUrl: Chocolate },
    { id: 3, name: 'Seed', imageUrl: Seed },
    { id: 4, name: 'DriedFruit', imageUrl: DriedFruit },
    { id: 5, name: 'Juice', imageUrl:Juice},
    { id: 6, name: 'Choco Bite', imageUrl: Bite },
];

const HomeCategory = () => {
    const classes = useStyles();
    return (
        <div   style={{ backgroundColor: '#f7f7f7',  padding: '0 1rem 2.5rem 1rem' }}>
            <Grid container spacing={2} mt={2} mb={2} justifyContent='center' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
                <Typography variant="h4" component="h2" style={{ padding: '10px 0 0 20px', textAlign: 'center', fontFamily: 'Lora' }}>
                    EXPLORE OUR CATEGORY
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

export default HomeCategory;
