// noteService.js
import api from './api';

export const getNotes = () => {
  return api.get('/notes');
};
