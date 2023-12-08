import React from 'react';
import {  Grid, Typography, Card, CardMedia, Button } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const History = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div style={{margin:'2rem'}}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6} data-aos="fade-right">
          <Card>
            <CardMedia
              component="img"
              alt="A mother and her children enjoying Lindt."
              height="360"
              image="https://www.chocolate.lindt.com/media/wysiwyg/Mother-and-Children-720x460.jpg"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <div className="content-container" style={{ backgroundColor: '#f7f7f7', padding: '20px'  }}>
            <Typography variant="h4" style={{ marginBottom: '20px' }}>
              HERITAGE
            </Typography>
            <Typography variant="h2" style={{ marginBottom: '20px' }}>
              Our Story
            </Typography>
            <Typography variant="body1">
              It all began in 1845 in a small confectionary shop in Zurich. Here David Sprüngli-Schwarz and his son, Rudolf
              Sprüngli-Ammann first produced chocolate in solid form. Since then our chocolate has been continuously
              perfected, becoming what it is today: creamy and rich. An incomparable taste.
            </Typography>
            <Button
              variant="outlined"
              style={{
                margin: '20px 0',
                color: '#ffffff',
                backgroundColor: '#917236',
                fontFamily: 'koho',
              }}
              href="https://www.chocolate.lindt.com/world-of-lindt/lindt-history"
            >
              Read More              </Button>
          </div>
        </Grid>
        
       
        <Grid item xs={12} md={6} data-aos="fade-right">
          <div className="content-container" style={{ backgroundColor: '#f7f7f7', padding: '20px' }}>
            <Typography variant="h4" style={{ marginBottom: '25px' }}>
              Sustainability
            </Typography>
            <Typography variant="h2" style={{ marginBottom: '25px' }}>
              Our Ethos
            </Typography>
            <Typography variant="body1">
              Quality doesn’t come from taste alone. At Lindt, we pride ourselves on knowing that our cocoa beans are
              sustainably and ethically sourced. That’s why we implemented our own sustainable sourcing model: The Lindt
              & Sprüngli Farming Program.
            </Typography>
            <Button
              variant="outlined"
              style={{
                margin: '20px 0',
                color: '#ffffff',
                backgroundColor: '#917236',
                fontFamily: 'koho',
              }}
              href="https://www.chocolate.lindt.com/world-of-lindt/lindt-history"
            >
              Read More            </Button>
              <br/>
          </div>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Card>
            <CardMedia
              component="img"
              alt="Lindt chocolate beans still in a cocoa pod."
              height="360"
              image="https://www.chocolate.lindt.com/media/wysiwyg/Cocoa-Pods-720x460.jpg"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default History;
