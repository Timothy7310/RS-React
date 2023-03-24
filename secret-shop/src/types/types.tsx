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
  card: Card | FormCard;
};

type CardListProps = {
  cards: Cards;
};

type CardFormListProps = {
  cards: FormCard[];
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

type FormCard = {
  // itemName: string;
  // heroName: string;
  // date: string;
  // rarity: string;
  // hasBuy: boolean;
  // side: string;
  // itemImage1: string;
  // itemImage2: string;
  // heroImage: string;
  // price: number;
  [k: string]: string | number | boolean;
};

type FormProps = {
  cardValue: (card: FormCard) => void;
};

type FormTextInputProps = {
  label: string;
  name: string;
  id: string;
};

type FormState = {
  itemName: { value: string; isError: boolean };
  heroName: { value: string; isError: boolean };
  date: { value: string; isError: boolean };
  rarity: { value: string; isError: boolean };
  hasBuy: { value: boolean; isError: boolean };
  side: { value: string; isError: boolean };
  itemImage1: { value: string; isError: boolean };
  itemImage2: { value: string; isError: boolean };
  heroImage: { value: string; isError: boolean };
  price: { value: number; isError: boolean };
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
  FormCard,
};
