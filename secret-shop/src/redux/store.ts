import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchSliceReducer } from './reducers/SearchReducer';
import { movieAPI } from '../services/MovieService';
import { formSliceReducer } from './reducers/FormReducer';

const rootReducer = combineReducers({
  searchSliceReducer,
  [movieAPI.reducerPath]: movieAPI.reducer,
  formSliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
