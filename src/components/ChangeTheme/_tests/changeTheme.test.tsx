import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import ChangeTheme from '../../../components/ChangeTheme';
import { WrapperThemeContext } from '../../../contexts/theme-context';
import '@testing-library/jest-dom';

beforeEach(() => {
  localStorage.clear();
});

describe('ChangeTheme Component', () => {
  it('should render the theme toggle button', () => {
    render(
      <WrapperThemeContext>
        <ChangeTheme />
      </WrapperThemeContext>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it("should show 'Dark mode' button when isDarkMode is false", () => {
    render(
      <WrapperThemeContext>
        <ChangeTheme />
      </WrapperThemeContext>
    );

    expect(
      screen.getByRole('button', { name: /Dark mode/i })
    ).toBeInTheDocument();
  });

  it("should show 'Light mode' button when isDarkMode is true", () => {
    localStorage.setItem('isDarkMode', 'true');

    render(
      <WrapperThemeContext>
        <ChangeTheme />
      </WrapperThemeContext>
    );

    expect(
      screen.getByRole('button', { name: /Light mode/i })
    ).toBeInTheDocument();
  });

  it('should toggle theme on button click', () => {
    render(
      <WrapperThemeContext>
        <ChangeTheme />
      </WrapperThemeContext>
    );

    const button = screen.getByRole('button', { name: /Dark mode/i });
    fireEvent.click(button);

    expect(
      screen.getByRole('button', { name: /Light mode/i })
    ).toBeInTheDocument();
    expect(localStorage.getItem('isDarkMode')).toBe('true');
  });
});
