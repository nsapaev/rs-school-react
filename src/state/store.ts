import { configureStore } from '@reduxjs/toolkit';
import formsSlice from '../features/forms/forms';

const store = configureStore({ reducer: { forms: formsSlice } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
