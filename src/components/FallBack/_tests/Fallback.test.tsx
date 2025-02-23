import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FallBack } from '../index';
import '@testing-library/jest-dom';

describe('FallBack component', () => {
  it('renders fallback message', () => {
    render(<FallBack />);
    expect(
      screen.getByText('oops something went wrong (:')
    ).toBeInTheDocument();
  });
});
