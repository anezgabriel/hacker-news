import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

interface searchParams {
  query: string;
  page: number;
}
export interface NewsState {
  data: any[];
  toggle: string;
  loading: boolean;
  error: boolean;
}

const initialState: NewsState = {
  data: [],
  toggle: 'All',
  loading: false,
  error: false,
};

export const fetchData = createAsyncThunk(
  'news/fetchData',
  async (searchParams: searchParams) => {
    const { query, page } = searchParams;
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?hitsPerPage=8&query=${query}&page=${page}`
      );
      return response.data.hits;
    } catch (error) {
      console.log(error);
    }
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    changeToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const news = [...state.data, ...action.payload];
      state.loading = false;
      state.data = news;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { changeToggle } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.data;
export const selectToggle = (state: RootState) => state.news.toggle;
export const selectLoading = (state: RootState) => state.news.loading;
export const selectError = (state: RootState) => state.news.error;

export default newsSlice.reducer;
