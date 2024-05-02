import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pizzaallapala.p.rapidapi.com',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '89a5a23ccbmshf6ff26a32b8d665p113cafjsn554eda1a0f8f',
    'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
  },
});

instance.interceptors.request.use(config => {
  return config;
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default instance;
