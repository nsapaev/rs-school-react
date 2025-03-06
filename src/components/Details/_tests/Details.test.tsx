import { describe, it, vi, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Details } from '..';
import { mockData } from '../../../tests/mockData';

const pushMock = vi.fn();

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: vi.fn(() => 'details'),
  }),
  useRouter: () => ({
    push: pushMock,
  }),
}));

vi.mock('../../../api/people-api-slice', () => ({
  useFetchPeopleQuery: vi.fn(() => ({
    data: {
      results: [{ ...mockData }],
    },
    isFetching: false,
    isError: false,
  })),
}));

describe('Details Component', () => {
  it('should render card details ', () => {
    render(<Details />);

    expect(screen.getByTestId('details-wrapper-testid')).toBeInTheDocument();
  });

  it('when button close button clicked url should change', async () => {
    render(<Details />);

    const closeButton = screen.getByTestId('close-details-button-testid');
    await fireEvent.click(closeButton);

    expect(pushMock).toHaveBeenCalledTimes(1);
  });
});
