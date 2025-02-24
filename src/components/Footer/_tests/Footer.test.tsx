import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { Footer } from '..';

describe('Footer component', () => {
  it('should render without errors', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
