import React from 'react';
import CardList from '../../src/components/Card/CardList';
import { describe, it } from 'vitest';
import renderWithProviders from '../../src/helper/testWithStore';
import { movieResult } from '../../src/mocks/data';

describe('CardList component', () => {
  it('render', () => {
    renderWithProviders(<CardList cards={movieResult} />);
  });

  it('render empty', () => {
    renderWithProviders(<CardList cards={[]} />);
  });
});
