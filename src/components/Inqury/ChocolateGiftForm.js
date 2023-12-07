// Import necessary dependencies from React and Material-UI
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

// Define your form component
const   ChocolateGiftForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    emailAddress: '',
    phoneNumber: '',
    quantity: '',
    deliveryDate: '',
    chocolateType: '',
    shapePreference: '',
    branding: '',
    packagingMaterial: '',
    customization: '',
    budgetRange: '',
    paymentTerms: '',
    additionalComments: '',
  });

  // Handle form field changes
  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission (e.g., API call, data processing)
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Corporate Inquiry Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Company Information */}
        <TextField
          label="Company Name"
          fullWidth
          margin="normal"
          value={formData.companyName}
          onChange={handleInputChange('companyName')}
        />
        <TextField
          label="Contact Person"
          fullWidth
          margin="normal"
          value={formData.contactPerson}
          onChange={handleInputChange('contactPerson')}
        />
        <TextField
          label="Email Address"
          fullWidth
          margin="normal"
          type="email"
          value={formData.emailAddress}
          onChange={handleInputChange('emailAddress')}
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleInputChange('phoneNumber')}
        />

        {/* Order Details */}
        <TextField
          label="Quantity"
          fullWidth
          margin="normal"
          type="number"
          value={formData.quantity}
          onChange={handleInputChange('quantity')}
        />
        <TextField
          label="Preferred Delivery Date"
          fullWidth
          margin="normal"
          type="date"
          value={formData.deliveryDate}
          onChange={handleInputChange('deliveryDate')}
        />
        <TextField
          label="Chocolate Type"
          fullWidth
          margin="normal"
          value={formData.chocolateType}
          onChange={handleInputChange('chocolateType')}
        />
        <TextField
          label="Rectangular Shape Preference"
          fullWidth
          margin="normal"
          value={formData.shapePreference}
          onChange={handleInputChange('shapePreference')}
        />

        {/* Customization Options */}
        <TextField
          label="Branding"
          fullWidth
          margin="normal"
          value={formData.branding}
          onChange={handleInputChange('branding')}
        />
        <TextField
          label="Packaging Material"
          fullWidth
          margin="normal"
          value={formData.packagingMaterial}
          onChange={handleInputChange('packagingMaterial')}
        />
        <TextField
          label="Additional Customization"
          fullWidth
          margin="normal"
          value={formData.customization}
          onChange={handleInputChange('customization')}
        />

        {/* Budget Information */}
        <TextField
          label="Budget Range"
          fullWidth
          margin="normal"
          value={formData.budgetRange}
          onChange={handleInputChange('budgetRange')}
        />
        <TextField
          label="Payment Terms"
          fullWidth
          margin="normal"
          value={formData.paymentTerms}
          onChange={handleInputChange('paymentTerms')}
        />

        {/* Additional Comments/Questions */}
        <TextField
          label="Customization description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={formData.additionalComments}
          onChange={handleInputChange('additionalComments')}
        />

        {/* Submit button */}
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit Inquiry
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ChocolateGiftForm;
