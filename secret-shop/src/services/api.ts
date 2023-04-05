import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1/',
  timeout: 5000,
  headers: {
    'X-API-KEY': API_KEY,
  },
});

const searchMovie = async (searchValue: string) => {
  const response = await axiosInstance.get(`movie?&page=1&limit=12&name=${searchValue}`);
  return response;
};

const getTop250 = async () => {
  const response = await axiosInstance.get(`movie?&page=1&limit=12&top250=%21null`);
  return response;
};

export { axiosInstance, searchMovie, getTop250 };
