import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import HeroImages from '../Images/HeroImage.png';
import { styled } from '@mui/system';


const DivContainer = styled('div')(({ theme }) => ({
    borderRadius: '20px',
    margin: '1rem 0',

}));

function HeroImage() {
    return (
        <DivContainer>
            <Box elevation={3}   >
                <Grid container alignItems="center" >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h1" style={{ padding: '10px 0 10px 20px', fontWeight: "bold", }}
                            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                            Be it white, dark, or pure it has to be chocolate!
                        </Typography>
                        <Typography variant="h6" component="h5" style={{ padding: '10px 0 10px 20px ', fontWeight: "bold" }}
                            data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100"
                        >
                            Celebrate all festival and occasions with chocolate coated Nuts with Hennessy
                        </Typography>
                        <Button variant="contained" style={{ margin: '10px 0 10px 20px', color: "#FFFFFF", backgroundColor: '#792b0f', fontFamily: 'koho' }}
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        >
                        Expolore Product</Button>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <img
                            src={HeroImages}
                            alt="Hero"
                            style={{ width: '100%', maxWidth: 500, }}
                            data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100"
                        />
                    </Grid>
                </Grid>
            </Box>
        </DivContainer>
    );
}

export default HeroImage;
