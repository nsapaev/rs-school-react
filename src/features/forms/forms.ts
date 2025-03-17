import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormsInterface, FormInterface } from './types';

const defaultForm: FormInterface = {
  name: '',
  age: NaN,
  email: '',
  password: '',
  gender: 'male',
  accept: false,
  image: '',
  countries: [],
  selectedCountry: '',
  confirmPassword: '',
};

const initialState: FormsInterface = {
  uncontrolledForm: { ...defaultForm },
  reactHookForm: { ...defaultForm },
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setUncontrolledForm(state, action: PayloadAction<FormInterface>) {
      state.uncontrolledForm = action.payload;
      state.uncontrolledForm.countries?.push(action.payload.selectedCountry);
    },
    setReactHookForm(state, action: PayloadAction<FormInterface>) {
      state.reactHookForm = action.payload;
      state.reactHookForm.countries?.push(action.payload.selectedCountry);
    },
  },
});

export const { setUncontrolledForm, setReactHookForm } = formsSlice.actions;
export default formsSlice.reducer;
