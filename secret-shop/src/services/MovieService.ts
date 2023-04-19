import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { CardWrapper, Card } from '../types/types';
import fetch from 'isomorphic-fetch';
const API_KEY = import.meta.env.VITE_API_KEY;

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1/',
    fetchFn: fetch,
    headers: { 'X-API-KEY': API_KEY },
  }),
  endpoints: (build) => ({
    fetchTop250: build.query<CardWrapper, number>({
      query: (limit = 12, page = 1) => ({
        url: '/movie',
        params: {
          _limit: limit,
          _page: page,
          top250: '!null',
        },
      }),
    }),
    fetchSearchMovie: build.query<CardWrapper, string>({
      query: (searchValue, limit = 12, page = 1) => ({
        url: '/movie',
        params: {
          _limit: limit,
          _page: page,
          name: searchValue,
        },
      }),
    }),
    fetchMovie: build.query<Card, string>({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {},
      }),
    }),
  }),
});
