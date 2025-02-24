import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DetailsFetchResultInterface } from '../../types/types';

export interface SearchSliceInterface {
  value: string;
  currentPage: number;
  selectedCards: DetailsFetchResultInterface[];
}

const initialState: SearchSliceInterface = {
  value: '',
  currentPage: 1,
  selectedCards: [],
};

const people = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    selectCard(state, action: PayloadAction<DetailsFetchResultInterface>) {
      const existingIndex = state.selectedCards.findIndex(
        (element) => element.name === action.payload.name
      );
      console.log('peopleFind', existingIndex);
      if (existingIndex === -1) {
        state.selectedCards.push(action.payload);
      } else {
        state.selectedCards.splice(existingIndex, 1);
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
