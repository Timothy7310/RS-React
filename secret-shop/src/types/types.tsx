type Card = {
  id: number;
  'item-name': string;
  category: string;
  type: string;
  hero: string;
  rarity: string;
  description: string;
  price: number;
  stock: number;
  'hero-icon': string;
  img1: string;
  img2: string;
  'video-link': string;
};

type Cards = Card[];

export type { Card, Cards };
