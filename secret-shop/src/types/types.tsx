import { UseFormRegister, FieldValues, DeepMap, FieldError } from 'react-hook-form';

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
  heroImage: string | FileList;
  itemImage1: string | FileList;
  itemImage2: string | FileList;
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

type CurrentPageProps = {
  page: string;
};

type FormCard = {
  [k: string]: string | number | boolean;
};

type FormProps = {
  cardValue: (card: FormCard) => void;
};

type FormErrorMessageProps = {
  message: string;
};

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  FieldError
>;

type FormInputProps = {
  name: string;
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
};

type ValidationSchemaDateInput = {
  validationSchema: {
    required: string;
    min: {
      value: string;
      message: string;
    };
    max: {
      value: string;
      message: string;
    };
  };
};

type ValidationSchemaFileInput = {
  validationSchema: {
    required: string;
    validate: {
      typeImg: (value: FileList) => boolean | string;
    };
  };
};

type ValidationSchemaNumberInput = {
  validationSchema: {
    required: string;
    min: {
      value: number;
      message: string;
    };
  };
};

type ValidationSchemaRadio = {
  validationSchema: {
    required: string;
  };
};

type ValidationSchemaSelect = {
  validationSchema: {
    required: string;
  };
};

type ValidationSchemaTextInput = {
  validationSchema: {
    required: string;
    minLength: {
      value: number;
      message: string;
    };
  };
};

export type {
  Card,
  Cards,
  CardProps,
  CardListProps,
  CurrentPageProps,
  FormProps,
  CardFormListProps,
  FormErrorMessageProps,
  FormCard,
  FieldErrors,
  FormInputProps,
  ValidationSchemaDateInput,
  ValidationSchemaFileInput,
  ValidationSchemaNumberInput,
  ValidationSchemaRadio,
  ValidationSchemaSelect,
  ValidationSchemaTextInput,
};
