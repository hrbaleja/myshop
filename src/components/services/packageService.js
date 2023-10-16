import api from './api';

export const getPackages = () => {
  return api.get('/packages');
};

export const getPackage = (packageId) => {
  return api.get(`/packages/${packageId}`);
};

export const createPackage = (packageData) => {
  return api.post('/packages', packageData);
};

export const updatePackage = (packageId, packageData) => {
  return api.put(`/packages/${packageId}`, packageData);
};

export const deletePackage = (packageId) => {
  return api.delete(`/packages/${packageId}`);
};


