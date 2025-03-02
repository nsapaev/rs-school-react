import '@testing-library/jest-dom';
import { expect, describe, vi, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import peopleReducer, {
  selectCard,
} from '../../../features/people/people-slice';
import { SearchSliceInterface } from '../../../features/people/people-slice';
import { Card } from '../index';
import { DetailsFetchResultInterface } from '../../../types/types';

interface preloadedStateInterface {
  people: SearchSliceInterface;
}

const createMockStore = (preloadedState: preloadedStateInterface) =>
  configureStore({ reducer: { people: peopleReducer }, preloadedState });

describe('Card Component', () => {
  const people: DetailsFetchResultInterface = {
    name: 'Luke Skywalker',
    mass: '77',
    gender: 'male',
    birth_year: '',
    eye_color: '',
    hair_color: '',
    height: '',
    skin_color: '',
  };
  it('renders correctly', () => {
    const store = createMockStore({
      people: { value: '', currentPage: 1, selectedCards: [] },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card people={people} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('mass:')).toBeInTheDocument();
    expect(screen.getByText('gender:')).toBeInTheDocument();
  });
  it('handles checkbox selection', () => {
    const store = createMockStore({
      people: { value: '', currentPage: 1, selectedCards: [] },
    });
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card people={people} />
        </MemoryRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith(selectCard(people));
  });

  it('displays checkbox as checked when selected', () => {
    const store = createMockStore({
      people: { value: '', currentPage: 1, selectedCards: [people] },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card people={people} />
        </MemoryRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
