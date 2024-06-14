import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review, ReviewsState, Language } from './interface'; 


const initialState: ReviewsState = {
  language: Language.Russian, 
  reviews: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,

  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
    loadReviews(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload;
    },
  },
});

export const { setLanguage, loadReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
