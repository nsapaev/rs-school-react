import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterStateInterface {
  value: number;
}

const initialState: CounterStateInterface = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
