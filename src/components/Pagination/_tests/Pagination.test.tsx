import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Pagination } from '../index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../../../features/people/people-slice';

const renderWithStore = (component: React.ReactElement) => {
  const store = configureStore({ reducer: { people: peopleReducer } });
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Pagination Component', () => {
  it('renders the correct number of pages', () => {
    renderWithStore(<Pagination pageCount={5} currentPage={1} />);
    const pages = screen.getAllByText(/^[1-5]$/);
    expect(pages).toHaveLength(5);
  });

  // it('applies the active class to the current page', () => {
  //   renderWithStore(<Pagination pageCount={5} currentPage={3} />);
  //   const activePage = screen.getByText('3');
  //   expect(activePage).toHaveClass('pagination__item_active');
  // });

  // it('dispatches setCurrentPage when a page is clicked', () => {
  //   const mockDispatch = vi.fn();
  //   vi.mock('../../app/hooks', () => ({
  //     useAppDispatch: () => mockDispatch,
  //   }));

  //   renderWithStore(<Pagination pageCount={5} currentPage={1} />);
  //   const pageTwo = screen.getByText('2');
  //   fireEvent.click(pageTwo);

  //   expect(mockDispatch).toHaveBeenCalledWith(setCurrentPage(2));
  // });
});
