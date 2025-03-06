import { render, screen } from '@testing-library/react';
import { vi, it, describe, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Pagination } from '..';

vi.mock('../../../state/hooks.ts', () => ({
  useAppDispatch: vi.fn,
}));

describe('Pagination component', () => {
  it('should display pagination', () => {
    render(<Pagination pageCount={8} currentPage={1} />);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
