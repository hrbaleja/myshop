// productService.js
import api from './api';

export const getProducts = () => {
  return api.get('/product');
};

export const getProduct = (productId) => {
  console.log('called')
  return api.get(`/product/${productId}`);
};

export const createProduct = (productData) => {
  return api.post('/product', productData);
};

export const updateProduct = (productId, productData) => {
  console.log(productId,productData)
  return api.put(`/product/${productId}`, productData);
};

export const deleteProduct = (productId) => {
  return api.delete(`/product/${productId}`);
};
