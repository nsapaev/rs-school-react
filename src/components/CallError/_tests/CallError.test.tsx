import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CallError } from '../index';
import '@testing-library/jest-dom';

describe('CallError component', () => {
  it('renders without crashing', () => {
    render(<CallError />);
    expect(screen.getByText('Error Trigger Button')).toBeInTheDocument();
  });

  it('throws an error when the button is clicked', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<CallError />);
    const button = screen.getByText('Error Trigger Button');

    expect(() => {
      fireEvent.click(button);
    }).toThrow('error button triggered');

    consoleError.mockRestore();
  });
});
