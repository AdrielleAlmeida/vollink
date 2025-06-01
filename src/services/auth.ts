import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const login = (username: string, password: string) => {
  return api.post('/auth/login', { username, password });
};

export const register = (name: string, email: string, username: string, password: string) => {
  return api.post('/users/register', { name, email, username, password });
};

export const getProfile = (token: string) => {
  return api.get('/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default api;