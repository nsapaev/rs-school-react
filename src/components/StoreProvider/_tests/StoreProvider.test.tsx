import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import StoreProvider from '..';

describe('StoreProvider component', () => {
  it('should render child components', () => {
    render(
      <StoreProvider>
        <p data-testid="child-to-test-StoreProvider"> test child</p>
      </StoreProvider>
    );

    expect(screen.getByText('test child')).toBeInTheDocument();
  });
});
