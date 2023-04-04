import { useState, useEffect, useRef, ChangeEvent } from 'react';
import '../styles/blocks/search.scss';

const Search = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');
  const searchInputRef = useRef<string>();

  useEffect(() => {
    searchInputRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchInputRef.current ?? '');
    };
  }, []);

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    searchInputRef.current = value;
  };

  return (
    <>
      <input
        type="search"
        name="search"
        className="goods-cards__head-search"
        placeholder="Поиск по названию"
        onChange={handelChange}
        value={searchValue}
      />
    </>
  );
};

export default Search;
