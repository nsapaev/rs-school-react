import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NotFoundPage } from '../index';
import '@testing-library/jest-dom';

vi.mock('react-router-dom', () => ({
  useRouteError: () => ({
    status: 404,
    statusText: 'Not Found',
    message: 'Page not found',
  }),
}));

describe('NotFoundPage component', () => {
  it('renders error status and message', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/Not Found|Page not found/i)).toBeInTheDocument();
  });
});
