import React from 'react';
import CardItem from '../../src/components/Card/CardItem';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { getMovieByID } from '../../src/services/api';

describe('CardItem component', () => {
  it('render', async () => {
    const movie = await getMovieByID('435');

    render(<CardItem card={movie.data} />);

    expect(screen.getByText('Зеленая миля'));
  });
});
