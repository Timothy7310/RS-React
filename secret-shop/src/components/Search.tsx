import { useState, ChangeEvent } from 'react';
import '../styles/blocks/search.scss';

type SearchProps = {
  searchValue: (value: string) => void;
};

const Search = ({ searchValue }: SearchProps) => {
  const [value, setValue] = useState(localStorage.getItem('searchValue') ?? '');

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    localStorage.setItem('searchValue', value);
  };

  return (
    <>
      <div className="search-wrap">
        <form
          action=""
          className="search-form"
          onSubmit={(event) => {
            event.preventDefault();
            searchValue(value);
          }}
        >
          <input
            type="search"
            name="search"
            className="search-form__input"
            placeholder="Поиск по названию"
            onChange={handelChange}
            value={value}
          />
          <button className="search-form__btn" type="submit">
            Поиск
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
