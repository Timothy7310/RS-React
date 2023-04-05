import { useState, ChangeEvent, useEffect } from 'react';
import '../styles/blocks/search.scss';

type SearchProps = {
  searchValue: (value: string) => void;
};

const Search = ({ searchValue }: SearchProps) => {
  const [value, setValue] = useState(localStorage.getItem('searchValue') ?? '');

  useEffect(() => {
    searchValue(value);
  }, [searchValue, value]);

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    localStorage.setItem('searchValue', value);
  };

  return (
    <>
      <div className="goods-cards__head-search-wrap">
        <input
          type="search"
          name="search"
          className="goods-cards__head-search"
          placeholder="Поиск по названию"
          onChange={handelChange}
          value={value}
        />
      </div>
    </>
  );
};

export default Search;
