import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import peopleSlice from '../features/people/people-slice';
import { peopleApiSlice } from '../api/people-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    people: peopleSlice,
    [peopleApiSlice.reducerPath]: peopleApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(peopleApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
