import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface NewsState {
  data: any[];
  toggle: string;
}

const initialState: NewsState = {
  data: [],
  toggle: 'All',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    changeToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { changeToggle } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.data;
export const selectToggle = (state: RootState) => state.news.toggle;

export default newsSlice.reducer;
