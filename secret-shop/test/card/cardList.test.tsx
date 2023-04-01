import React from 'react';
import CardList from '../../src/components/Card/CardList';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import goods from '../../src/assets/goods.json';

describe('CardItem component', () => {
  it('render', () => {
    render(<CardList cards={goods} />);
  });

  it('render empty', () => {
    render(<CardList cards={[]} />);
  });
});
