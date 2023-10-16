// categoryService.js
import api from './api';

export const getCategories = () => {
  return api.get('/categories');
};

export const createCategory = (categoryData) => {
  return api.post('/categories', categoryData);
};

export const updateCategory = (categoryId, categoryData) => {
  return api.put(`/categories/${categoryId}`, categoryData);
};

export const deleteCategory = (categoryId) => {
  return api.delete(`/categories/${categoryId}`);
};
