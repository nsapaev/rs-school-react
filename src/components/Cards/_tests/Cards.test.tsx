import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../../../features/people/people-slice';
import { Cards } from '..';
import { DetailsFetchResultInterface } from '../../../types/types';

// Создаем тестовый store
const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});

const mockData: DetailsFetchResultInterface[] = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
];

describe('Cards Component', () => {
  it('renders "no data" when tableData is empty', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cards tableData={[]} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('no data')).toBeInTheDocument();
  });

  it('renders correct number of Card components', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cards tableData={mockData} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
  });
});
