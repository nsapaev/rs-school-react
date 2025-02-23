import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { characters } from './mockFile';
import { Table } from '..';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';

describe('Table component', () => {
  it('render correct number of rows', async () => {
    render(
      <MemoryRouter>
        <Table tableData={characters} />;
      </MemoryRouter>
    );
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(characters.length + 1);
  });

  it('render no data if no rows', async () => {
    render(
      <MemoryRouter>
        <Table tableData={[]} />
      </MemoryRouter>
    );

    const noDataMessage = await screen.findByText('no data');
    expect(noDataMessage).toBeInTheDocument();
  });
});
