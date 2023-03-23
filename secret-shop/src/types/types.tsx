type Card = {
  id: number;
  itemName: string;
  category: string;
  type: string;
  heroName: string;
  rarity: string;
  description: string;
  price: number;
  stock: number;
  heroImage: string;
  itemImage1: string;
  itemImage2: string;
  videoLink: string;
  date: string;
  hasBuy: boolean;
  side: string;
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

type FormCheckboxProps = {
  inputValue: (value: boolean) => void;
};

type FormNumberInputProps = {
  inputValue: (value: number) => void;
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
  hasBuy: boolean;
  side: string;
  itemImage: string;
  heroImage: string;
  price: number;
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
  FormCheckboxProps,
  FormNumberInputProps,
};
