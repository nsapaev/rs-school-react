import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import MainPage from '../Main';
import { store } from '../../../state/store';
import { mockData } from '../../../tests/mockData';

vi.mock('../../../state/hooks.ts', () => ({
  useAppDispatch: vi.fn(() => vi.fn()),
  useAppSelector: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(() => ({
    get: vi.fn(),
  })),
}));

const mockUseFetchPeopleQuery = vi.fn();
vi.mock('../../../api/people-api-slice', async () => {
  const actual = await import('../../../api/people-api-slice');
  return {
    ...actual,
    useFetchPeopleQuery: () => mockUseFetchPeopleQuery(),
  };
});

describe('Main page', () => {
  it('should display main page', () => {
    mockUseFetchPeopleQuery.mockReturnValue({
      data: { results: [{ ...mockData }], count: 0 },
      isFetching: false,
      isError: false,
    });

    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it("should display 'no data' if data.results length less then 1 ", () => {
    mockUseFetchPeopleQuery.mockReturnValue({
      data: { results: [], count: 0 },
      isFetching: false,
      isError: false,
    });

    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.getByText('no data')).toBeInTheDocument();
  });

  it('should display error if isError', () => {
    mockUseFetchPeopleQuery.mockReturnValue({
      data: null,
      isFetching: false,
      isError: true,
      error: { message: 'error fetching data' },
    });

    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.getByText(/error fetching data/i)).toBeInTheDocument();
  });
  it('should display loader when fetching data', () => {
    mockUseFetchPeopleQuery.mockReturnValue({
      data: null,
      isFetching: true,
    });

    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
