import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormsInterface, FormInterface } from './types';

// const defaultForm: FormInterface = {
//   name: '',
//   age: NaN,
//   email: '',
//   password: '',
//   gender: 'male',
//   accept: false,
//   image: '',
//   selectedCountry: '',
//   confirmPassword: '',
// };

const initialState: FormsInterface = {
  forms: [],
  countries: [],
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setForm(state, action: PayloadAction<FormInterface>) {
      state.forms.push(action.payload);
      state.countries.push(action.payload.selectedCountry);
    },
  },
});

export const { setForm } = formsSlice.actions;
export default formsSlice.reducer;
