import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface NewsState {
  data: any[];
}

const initialState: NewsState = {
  data: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // add reducers here
  },
});

// export const { } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.data;

export default newsSlice.reducer;
