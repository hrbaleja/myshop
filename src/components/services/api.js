// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mychocolate-api.vercel.app/api/v1', 
});

export default api;
