import React from 'react';
import CardItem from '../src/components/CardItem';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

const renderCard = {
  id: 1,
  'item-name': 'Dark Behemoth',
  category: 'The International 2022',
  type: 'bundle',
  hero: 'Primal Beast',
  rarity: 'mythical',
  description:
    'Содержит загрузочный экран и все предметы из набора Dark Behemoth для Primal Beast.',
  price: 1299,
  stock: 10,
  'hero-icon': 'https://collectorsshop.ru/img/catalog/heroes/mini/2022/11/123.jpeg',
  img1: 'https://collectorsshop.ru/img/catalog/items/main_images/2022/11/625.png',
  img2: 'https://dota2changer.com/screens/f/PB%20Dark%20Behemoth1.webp?v=1',
  'video-link': 'https://collectorsshop.ru/img/catalog/items/video/2022/11/625.mp4',
};

const emptyImgCard = {
  id: 1,
  'item-name': 'Dark Behemoth',
  category: 'The International 2022',
  type: 'bundle',
  hero: 'Primal Beast',
  rarity: 'mythical',
  description:
    'Содержит загрузочный экран и все предметы из набора Dark Behemoth для Primal Beast.',
  price: 1299,
  stock: 10,
  'hero-icon': 'https://collectorsshop.ru/img/catalog/heroes/mini/2022/11/123.jpeg',
  img1: '',
  img2: '',
  'video-link': 'https://collectorsshop.ru/img/catalog/items/video/2022/11/625.mp4',
};

describe('CardItem component', () => {
  it('render', () => {
    render(<CardItem card={renderCard} />);
  });
});
