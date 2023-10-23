import React from 'react';
import { Typography, Container, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer style={{
      backdropFilter: 'blur(20px)',
      'WebkitBackdropFilter': 'blur(20px)',
      color: '#000000', padding: '2rem 0', borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.18)'
    }}>

      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" gutterBottom fontWeight="bold">
              Hennessy Store
            </Typography>
            <ul>
              <li>
                <Link href="/privacy-policy" color="inherit">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" color="inherit">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faqs" color="inherit">
                  FAQs
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" gutterBottom>
              Follow Us
            </Typography>
            <div>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Mysha-Enterprise            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
            81, Shyam-3, Industrial Hub,
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              B/h Pachratana Industrial Estate,
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Changodar, Ahmedabad-382213
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" component="p" gutterBottom>
              Phone: <a href="tel:+919157897526" >+91 9157897526</a>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Email: <a href="mailto:info@example.com">info@example.com</a>
            </Typography>
            <Typography variant="body2" align="left" color="blue">
              &copy; 2023 Hennessy. All rights reserved.
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
