import React from 'react';
import CardList from '../src/components/CardList';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import goods from '../src/assets/goods.json';

describe('CardItem component', () => {
  it('render', () => {
    render(<CardList cards={goods} />);
  });

  it('render empty', () => {
    render(<CardList cards={[]} />);
  });
});
