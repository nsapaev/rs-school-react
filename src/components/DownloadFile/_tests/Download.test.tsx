import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { DownloadFile } from '..';
import { peopleApiSlice } from '../../../api/people-api-slice';

const store = configureStore({
  reducer: {
    [peopleApiSlice.reducerPath]: peopleApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApiSlice.middleware),
});

describe('Download File', () => {
  it('should display download Button', async () => {
    render(
      <Provider store={store}>
        <DownloadFile fileName="download.csv" />
      </Provider>
    );

    expect(
      await screen.findByRole('button', { name: /Download/i })
    ).toBeInTheDocument();
  });
});
