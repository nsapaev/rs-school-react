import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchComponent } from '../index';
import '@testing-library/jest-dom';

describe('SearchComponent', () => {
  it('renders input field and button', () => {
    render(
      <SearchComponent
        inputValue=""
        handleInputChange={() => {}}
        onSendSearchValue={() => {}}
      />
    );

    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByText('search')).toBeInTheDocument();
  });

  it('calls handleInputChange on input change', () => {
    const handleInputChangeMock = vi.fn();
    render(
      <SearchComponent
        inputValue=""
        handleInputChange={handleInputChangeMock}
        onSendSearchValue={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Search by name');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(handleInputChangeMock).toHaveBeenCalledWith('test');
  });

  it('calls onSendSearchValue when search button is clicked', () => {
    const onSendSearchValueMock = vi.fn();
    render(
      <SearchComponent
        inputValue=""
        handleInputChange={() => {}}
        onSendSearchValue={onSendSearchValueMock}
      />
    );

    const button = screen.getByText('search');
    fireEvent.click(button);

    expect(onSendSearchValueMock).toHaveBeenCalled();
  });
});
