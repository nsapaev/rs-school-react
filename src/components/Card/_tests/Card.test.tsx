import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { mockData } from '../../../tests/mockData';

import '@testing-library/jest-dom';
import { Card } from '..';

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: vi.fn(() => 'test-search'),
  }),
}));

vi.mock('../../../state/hooks', () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

describe('Card Component', () => {
  it('should display Card', async () => {
    render(<Card people={mockData} />);
    expect(await screen.findByTestId('card-wrapper')).toBeInTheDocument();
  });
});
