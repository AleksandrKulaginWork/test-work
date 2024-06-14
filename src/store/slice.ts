import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewsState, Language } from './interface'; 
import data from '../assets/data/data.json';


const initialState: ReviewsState = {
  language: Language.Russian, 
  reviews: Object.values(data.ru),
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,

  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
      state.reviews = Object.values(data[action.payload]);
    }
  },
});

export const { setLanguage } = reviewsSlice.actions;
export default reviewsSlice.reducer;
