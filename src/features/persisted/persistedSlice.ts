import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface PersistedState {
  filter: {
    name: string;
    value: string;
    img: any;
  };
  myFaves: any[];
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
  },
});

export const { setFilter } = persistedSlice.actions;

export const selectFilter = (state: RootState) => state.persisted.filter;

export default persistedSlice.reducer;
