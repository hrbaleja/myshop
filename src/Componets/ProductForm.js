import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    description: '',
    price: '',
    images: [], // Store selected images
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageDrop = (acceptedFiles) => {
    // Update the images array with selected image files
    setFormData({ ...formData, images: acceptedFiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send to the server
    const formDataToSend = new FormData();
    formDataToSend.append('category', formData.category);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);
    formData.images.forEach((image, index) => {
      formDataToSend.append(`image${index}`, image);
    });

    // Send the form data to the server (replace with your server URL)
    try {
      const response = await axios.post('your-server-url', formDataToSend);
      console.log('Form data sent:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          required
        />

        {/* Dropzone for image uploads */}
        <Dropzone onDrop={handleImageDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} style={{ margin: '16px 0', padding: '8px', border: '1px dashed #ccc', cursor: 'pointer' }}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some images here, or click to select images</p>
              {formData.images.map((file, index) => (
                <div key={index}>{file.name}</div>
              ))}
            </div>
          )}
        </Dropzone>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
