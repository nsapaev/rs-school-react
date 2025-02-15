import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MainPage from '..';

describe('Main Page Component', () => {
  it('Main page render', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainPage />
      </MemoryRouter>
    );
    const mainPage = screen.getByTestId('main-page');
    expect(mainPage).toBeInTheDocument();
  });
});
