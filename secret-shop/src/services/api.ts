import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1/',
  timeout: 5000,
});

export default axiosInstance;
