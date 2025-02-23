import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from '..';
import { ThemeContext } from '../../../contexts/theme-context';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../../../features/people/people-slice';
import '@testing-library/jest-dom';

const renderWithProviders = (
  component: React.ReactElement,
  themeValue: boolean
) => {
  const store = configureStore({ reducer: { people: peopleReducer } });
  return render(
    <Provider store={store}>
      <ThemeContext.Provider value={themeValue}>
        {component}
      </ThemeContext.Provider>
    </Provider>
  );
};

describe('Header Component', () => {
  it('renders SearchComponent and CallError', () => {
    renderWithProviders(<Header />, {
      isDarkMode: false,
      setIsDarkMode: vi.fn(),
    });
    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('toggles theme on button click', () => {
    const setIsDarkModeMock = vi.fn();
    renderWithProviders(<Header />, {
      isDarkMode: false,
      setIsDarkMode: setIsDarkModeMock,
    });
    const button = screen.getByText('Dark mode');
    fireEvent.click(button);
    expect(setIsDarkModeMock).toHaveBeenCalledWith(true);
  });

  it('changes button text based on theme mode', () => {
    renderWithProviders(<Header />, {
      isDarkMode: true,
      setIsDarkMode: vi.fn(),
    });
    expect(screen.getByText('Light mode')).toBeInTheDocument();
  });
});
