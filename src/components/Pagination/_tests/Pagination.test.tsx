import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from '../index';
import '@testing-library/jest-dom';

describe('Pagination component', () => {
  it('renders correct number of pages', () => {
    render(
      <Pagination pageCount={5} currentPage={1} setCurrentPage={() => {}} />
    );
    const pages = screen.getAllByText(/\d+/);
    expect(pages.length).toBe(5);
  });

  it('calls setCurrentPage on click', () => {
    const setCurrentPageMock = vi.fn();
    render(
      <Pagination
        pageCount={5}
        currentPage={1}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const secondPage = screen.getByText('2');
    fireEvent.click(secondPage);

    expect(setCurrentPageMock).toHaveBeenCalledWith(2);
  });

  it('applies active class to the current page', () => {
    render(
      <Pagination pageCount={5} currentPage={3} setCurrentPage={() => {}} />
    );
    const activePage = screen.getByText('3');
    expect(activePage.className).toMatch(/pagination__item_active/);
  });
});
