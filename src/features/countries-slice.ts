import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ICountries, ICountry } from '../types/index.ts';

const initialState: ICountries = {
  countries: [],
  region: 'All',
  sortedState: 'without',
  searchedValue: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchedValue = action.payload;
    },
    setSortedState: (
      state,
      action: PayloadAction<'without' | 'asc' | 'desc'>
    ) => {
      state.sortedState = action.payload;
    },
    setClearFilters: (state) => {
      state.region = 'All';
      state.searchedValue = '';
      state.sortedState = 'without';
    },
  },
});

export const { setRegion, setSortedState, setSearchValue, setClearFilters } =
  countriesSlice.actions;
export default countriesSlice.reducer;
