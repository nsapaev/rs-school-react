import { render, screen } from '@testing-library/react';
import { Loader } from '..';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

describe('Loader component', () => {
  it('Loader render', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
