import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CallError } from '../index';
import '@testing-library/jest-dom';

const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

describe('CallError component', () => {
  it('renders without crashing', () => {
    render(<CallError />);
    expect(
      screen.getByRole('button', { name: /Error Trigger Button/i })
    ).toBeInTheDocument();
  });

  it('throws an error when the button is clicked', () => {
    render(<CallError />);
    const button = screen.getByText('Error Trigger Button');

    expect(() => {
      fireEvent.click(button);
    }).toThrow(/Error button triggered/i);

    consoleError.mockRestore();
  });
});
