import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchSliceInterface {
  value: string;
  currentPage: number;
}

const initialState: SearchSliceInterface = {
  value: '',
  currentPage: 1,
};

const peopleSlice = createSlice({
  name: 'search-slice',
  initialState: initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { changeSearchValue, setCurrentPage } = peopleSlice.actions;
export default peopleSlice.reducer;
