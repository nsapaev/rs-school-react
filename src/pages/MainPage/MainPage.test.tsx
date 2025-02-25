import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './';
import peopleReducer from '../../features/people/people-slice';
import { http, HttpResponse } from 'msw';
import { server } from '../../tests/setup';
import { peopleApiSlice } from '../../api/people-api-slice';

server.listen();
const setupStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      people: peopleReducer,
      [peopleApiSlice.reducerPath]: peopleApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(peopleApiSlice.middleware),
    preloadedState,
  });

describe('MainPage with MSW', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'search') return 'Luke';
      return null;
    });
  });

  it('renders Loader while fetching data', () => {
    render(
      <Provider store={setupStore({ people: { value: '', currentPage: 1 } })}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders Cards and Pagination when API returns data', async () => {
    server.use(
      http.get('https://swapi.dev/api/people/', () => {
        return HttpResponse.json({
          results: [{ name: 'Luke Skywalker', height: '172' }],
          count: 10,
        });
      })
    );

    render(
      <Provider
        store={setupStore({
          people: { value: '', currentPage: 1, selectedCards: [] },
        })}
      >
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    });

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('renders no data if  data length < 1', async () => {
    server.use(
      http.get('https://swapi.dev/api/people/', () => {
        return HttpResponse.json({
          results: [],
          count: 10,
        });
      })
    );
    render(
      <Provider
        store={setupStore({
          people: { value: '', currentPage: 1, selectedCards: [] },
        })}
      >
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/no data/i)).toBeInTheDocument();
    });
  });
});
