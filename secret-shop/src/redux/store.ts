import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { searchSliceReducer } from './reducers/SearchReducer';
import { movieAPI } from '../services/MovieService';
import { formSliceReducer } from './reducers/FormReducer';

export const rootReducer = combineReducers({
  searchSliceReducer,
  [movieAPI.reducerPath]: movieAPI.reducer,
  formSliceReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
