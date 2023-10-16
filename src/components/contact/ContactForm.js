import React from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Container  spacing={2} style={{ margin: '16px 0' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        We'd love to hear from you. Please fill out the form below to get in touch with us.
      </Typography>

      <Grid container spacing={2} style={{ marginTop: '16px' }}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '16px' }}
      >
        Send Message
      </Button>
    </Container>
  );
};

export default ContactForm;
