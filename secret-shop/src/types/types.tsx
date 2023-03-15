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

type CardProps = {
  card: Card;
};

type CardListProps = {
  cards: Cards;
};

type SearchState = {
  value: string;
};

type SearchProps = {
  [key: string]: never;
};

export type { Card, Cards, CardProps, CardListProps, SearchState, SearchProps };
