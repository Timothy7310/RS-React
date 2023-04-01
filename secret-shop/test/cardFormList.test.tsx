import React from 'react';
import CardFormList from '../src/components/Card/CardFormList';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

const renderCards = [
  {
    id: 1,
    itemName: 'Dark Behemoth',
    category: 'The International 2022',
    type: 'bundle',
    heroName: 'Primal Beast',
    rarity: 'mythical',
    description:
      'Содержит загрузочный экран и все предметы из набора Dark Behemoth для Primal Beast.',
    price: 1299,
    stock: 10,
    heroImage: 'https://collectorsshop.ru/img/catalog/heroes/mini/2022/11/123.jpeg',
    itemImage1: 'https://collectorsshop.ru/img/catalog/items/main_images/2022/11/625.png',
    itemImage2: 'https://dota2changer.com/screens/f/PB%20Dark%20Behemoth1.webp?v=1',
    videoLink: 'https://collectorsshop.ru/img/catalog/items/video/2022/11/625.mp4',
    date: '23.03.2023',
    hasBuy: true,
    side: 'dire',
  },
];

describe('CardFormList component', () => {
  it('render', () => {
    render(<CardFormList cards={renderCards} />);
    expect(screen.getByText('New Cards'));
  });
});
