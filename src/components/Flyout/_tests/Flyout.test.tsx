import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Flyout } from '..';
import peopleReducer, {
  unselectAllCards,
} from '../../../features/people/people-slice';

const setupStore = (preloadedState = {}) =>
  configureStore({
    reducer: { people: peopleReducer },
    preloadedState,
  });

describe('Flyout Component', () => {
  it('does not render when no cards are selected', () => {
    render(
      <Provider store={setupStore({ people: { selectedCards: [] } })}>
        <Flyout />
      </Provider>
    );

    expect(screen.queryByText(/selected items:/i)).not.toBeInTheDocument();
  });

  it('renders with correct selected count', () => {
    render(
      <Provider store={setupStore({ people: { selectedCards: [1, 2] } })}>
        <Flyout />
      </Provider>
    );

    expect(screen.getByText('selected items: 2')).toBeInTheDocument();
  });

  it('dispatches unselectAllCards when "Unselect all" button is clicked', () => {
    const store = setupStore({ people: { selectedCards: [1, 2] } });
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

    const button = screen.getByText('Unselect all');
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(unselectAllCards());
  });
});
