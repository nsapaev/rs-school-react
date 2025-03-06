import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { mockData } from '../../../tests/mockData';

import { Cards } from '..';
import { DetailsFetchResultInterface } from 'src/types/types';

vi.mock('../../../state/hooks', () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: vi.fn(() => 'test-search'),
  }),
}));

const mockTableData: DetailsFetchResultInterface[] = [
  { ...mockData },
  { ...mockData },
];

describe('Cards Component', () => {
  it('should render Cards', () => {
    render(<Cards tableData={mockTableData} />);

    expect(screen.getByTestId('cards-wrapper-testid')).toBeInTheDocument();
  });
});
