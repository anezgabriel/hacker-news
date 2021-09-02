import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface NewsState {
  data: any[];
  toggle: string;
  filter: {
    name: string;
    img: any;
  };
}

const initialState: NewsState = {
  data: [],
  toggle: 'All',
  filter: {
    name: '',
    img: null,
  },
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // add reducers here
    changeToggle: (state, action) => {
      state.toggle = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeToggle, setFilter } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.data;
export const selectToggle = (state: RootState) => state.news.toggle;
export const selectFilter = (state: RootState) => state.news.filter;

export default newsSlice.reducer;
