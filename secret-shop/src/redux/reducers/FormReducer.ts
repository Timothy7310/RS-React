import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormCard } from '../../types/types';

type InitialState = {
  cards: FormCard[];
};

const initialState: InitialState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<FormCard>) {
      state.cards = [action.payload, ...state.cards];
    },
  },
});

export const formSliceReducer = formSlice.reducer;
