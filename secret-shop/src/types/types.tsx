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

type EmptyProps = {
  [key: string]: never;
};

type CurrentPageProps = {
  page: string;
};

type FormElementsProps = {
  inputValue: (value: string) => void;
};

type FormTextInputProps = {
  label: string;
  name: string;
  id: string;
};

type FormState = {
  itemName: string;
  heroName: string;
  date: string;
  rarity: string;
};

export type {
  Card,
  Cards,
  CardProps,
  CardListProps,
  SearchState,
  EmptyProps,
  CurrentPageProps,
  FormElementsProps,
  FormTextInputProps,
  FormState,
};
