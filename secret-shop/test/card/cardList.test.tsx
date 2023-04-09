import React from 'react';
import CardList from '../../src/components/Card/CardList';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { searchMovie, getTop250 } from '../../src/services/api';

describe('CardList component', () => {
  it('render', async () => {
    const movies = await searchMovie('Зеленая миля');

    render(<CardList cards={movies.data.docs} />);
    expect(screen.getByText('Зеленая миля'));
  });

  it('render starting', async () => {
    const movies = await getTop250();
    render(<CardList cards={movies.data.docs} />);
    expect(screen.getAllByTestId('card')).toHaveLength(12);
  });
});
