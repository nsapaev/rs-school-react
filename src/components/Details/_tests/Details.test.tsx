import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { Details } from '../';
import { server } from '../../../tests/setup';
import { peopleApiSlice } from '../../../api/people-api-slice';
import '@testing-library/jest-dom';

server.listen();

const store = configureStore({
  reducer: {
    [peopleApiSlice.reducerPath]: peopleApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApiSlice.middleware),
});

const navigateMock = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe('Details Component', () => {
  test('show display loader in loading time', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path="/details/:detailId" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('should display data after loading', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path="/details/:detailId" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(await screen.findByText(/name:/i)).toBeInTheDocument();
    expect(await screen.findByText(/Luke Skywalker/i)).toBeInTheDocument();
  });

  // test('show error if response 500 ', async () => {
  //   server.use(
  //     http.get('https://swapi.dev/api/people/', async () => {
  //       return new HttpResponse(null, { status: 500 });
  //     })
  //   );

  //   render(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={['/details/1']}>
  //         <Routes>
  //           <Route path="/details/:detailId" element={<Details />} />
  //         </Routes>
  //       </MemoryRouter>
  //     </Provider>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText(/500/i)).toBeInTheDocument();
  //   });
  // });

  test('should close details when click close button', async () => {
    const user = userEvent.setup();
    // const navigateMock = vi.fn();

    vi.mock('react-router-dom', async () => {
      const actual = await vi.importActual('react-router-dom');
      return {
        ...actual,
        useNavigate: () => navigateMock,
      };
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path="/details/:detailId" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument()
    );

    const closeButton = screen.getByTestId('close-button');
    await user.click(closeButton);

    expect(navigateMock).toHaveBeenCalledWith({ pathname: '/', search: '' });
  });
});
