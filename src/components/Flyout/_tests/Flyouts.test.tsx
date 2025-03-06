import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Flyout } from '..';

vi.mock('../../../state/hooks.ts', () => ({
  useAppSelector: vi.fn(() => [{}]),
  useAppDispatch: vi.fn(),
}));
vi.stubGlobal('URL', {
  createObjectURL: vi.fn(() => 'mocked-url'),
});

describe('Flyout component', () => {
  it('should display flyout ', () => {
    render(<Flyout />);

    expect(screen.getByTestId('flyout-testid')).toBeInTheDocument();
  });
});
