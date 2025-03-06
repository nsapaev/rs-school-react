import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Loader } from '..';

describe('Loader component', () => {
  it('should display Loader', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
