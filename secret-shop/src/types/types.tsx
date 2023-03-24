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
  card: Card | FormState;
};

type CardListProps = {
  cards: Cards;
};

type CardFormListProps = {
  cards: FormState[];
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
  valid: boolean;
};

type FormCheckboxProps = {
  inputValue: (value: boolean) => void;
};

type FormRadioProps = {
  inputValue: (value: string) => void;
};

type FormNumberInputProps = {
  inputValue: (value: number) => void;
  valid: boolean;
};

type FormProps = {
  cardValue: (card: FormState) => void;
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
  itemImage1: string;
  itemImage2: string;
  heroImage: string;
  price: number;
};

type FormErrorMessageProps = {
  valid: boolean;
  message: string;
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
  FormProps,
  CardFormListProps,
  FormErrorMessageProps,
  FormRadioProps,
};
