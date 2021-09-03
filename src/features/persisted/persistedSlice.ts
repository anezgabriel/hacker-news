import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Post } from '../../app/types';

export interface PersistedState {
  filter: {
    name: string;
    value: string;
    img: any;
  };
  myFaves: Post[];
}

const initialState: PersistedState = {
  filter: {
    name: '',
    value: '',
    img: null,
  },
  myFaves: [],
};

export const persistedSlice = createSlice({
  name: 'persisted',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addFavorite: (state, action) => {
      state.myFaves.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const newFaves = state.myFaves.filter(
        (el) => el.created_at !== action.payload.created_at
      );
      state.myFaves = newFaves;
    },
  },
});

export const { setFilter, addFavorite, removeFavorite } =
  persistedSlice.actions;

export const selectFilter = (state: RootState) => state.persisted.filter;
export const selectFavorites = (state: RootState) => state.persisted.myFaves;

export default persistedSlice.reducer;
