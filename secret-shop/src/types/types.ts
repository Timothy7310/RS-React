import { UseFormRegister, FieldValues, DeepMap, FieldError } from 'react-hook-form';

type TrailersType = {
  _id: string;
  url: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

type ProductionCompaniesType = {
  name: string;
  url: string;
  previewUrl: string;
};

type SpokenLanguagesType = {
  name: string;
  nameEn: string;
};

type FactsType = {
  value: string;
};

type GenresType = {
  name: string;
};

type CountriesType = {
  name: string;
};

type PersonsType = {
  id: number;
  name: string;
  enName: string;
  photo: string;
  enProfession: string;
};

type Card = {
  kinopoiskId: number;
  id: number;
  ageRating: number;
  externalId: {
    tmdb: number;
    imdb: string;
  };
  type: string;
  name: string;
  alternativeName: string;
  description: string;
  slogan: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  rating: {
    tmdb: number;
    kp: number;
    imdb: number;
  };
  votes: {
    tmdb: number;
    kp: number;
    imdb: number;
  };
  videos: {
    trailers: TrailersType[];
    teasers: [];
  };
  budget: {
    value: number;
    currency: string;
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
    russia: {
      value: number;
      currency: string;
    };
    usa: {
      value: number;
      currency: string;
    };
  };
  distributors: {
    distributor: string;
    distributorRelease: string;
  };
  premiere: {
    country: string;
    world: string;
    russia: string;
    bluray: string;
    dvd: string;
  };
  images: {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
  };
  status: string;
  movieLength: number;
  productionCompanies: ProductionCompaniesType[];
  spokenLanguages: SpokenLanguagesType[];
  facts: FactsType[];
  genres: GenresType[];
  countries: CountriesType[];
  seasonsInfo: [];
  persons: PersonsType[];
  lists: [];
};

type CardWrapper = {
  docs: Card[];
};

type Cards = Card[];

type CardProps = {
  card: Card;
};

type CardFormProps = {
  card: FormCard;
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
  [k: string]: string | number | boolean | FileList;
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
    max: {
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

type CardModalProps = {
  closeModal: (isOpen: boolean) => void;
  movie: Card;
};

export type {
  Card,
  Cards,
  CardProps,
  CardFormProps,
  CardListProps,
  CurrentPageProps,
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
  CardModalProps,
  CardWrapper,
};
