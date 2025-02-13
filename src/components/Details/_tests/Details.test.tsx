import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Details } from '..';
import { character } from './mockFile';
import '@testing-library/jest-dom';
import { fetchRequest } from '../../../helpers/helpers';

vi.mock('../../../helpers/helpers', () => ({
  fetchRequest: vi.fn(),
}));
const mockFetchRequest = vi.mocked(fetchRequest);

describe('Details Component', () => {
  it('change navigation after click on close button', async () => {
    mockFetchRequest.mockResolvedValueOnce({
      results: [character],
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:detailId" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    const closeButton = await screen.findByTestId('close-button');

    fireEvent.click(closeButton);

    expect(window.location.pathname).toBe('/');
  });
});
