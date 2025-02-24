import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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

vi.mock('../../../app/hooks', () => ({
  useAppSelector: () => [
    {
      name: 'Luke Skywalker',
      height: '172',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    },
  ],
}));

describe('Download File', () => {
  beforeAll(() => {
    globalThis.URL.createObjectURL = vi.fn(() => 'mock-url');
    globalThis.URL.revokeObjectURL = vi.fn();
  });
  afterAll(() => {
    vi.restoreAllMocks();
  });
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

  it('calls downloadCSV function when button is clicked', () => {
    render(<DownloadFile fileName="test.csv" />);

    const button = screen.getByText('Download');
    fireEvent.click(button);

    expect(globalThis.URL.createObjectURL).toHaveBeenCalled();
  });
});
