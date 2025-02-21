import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchSliceInterface {
  value: string;
  currentPage: number;
  selectedCards: string[];
}

const initialState: SearchSliceInterface = {
  value: '',
  currentPage: 1,
  selectedCards: [],
};

const people = createSlice({
  name: 'search-slice',
  initialState: initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    selectCard(state, action: PayloadAction<string>) {
      const index = state.selectedCards.indexOf(action.payload);
      if (index === -1) {
        state.selectedCards.push(action.payload);
      } else {
        state.selectedCards.splice(index, 1);
      }
    },
    unselectAllCards(state) {
      state.selectedCards = [];
    },
  },
});

export const {
  changeSearchValue,
  setCurrentPage,
  selectCard,
  unselectAllCards,
} = people.actions;
export default people.reducer;
