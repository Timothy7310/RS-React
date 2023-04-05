import { useState, useEffect, useRef, ChangeEvent } from 'react';
import '../styles/blocks/search.scss';
import axiosInstance from '../services/api';

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

  const handelChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    searchInputRef.current = value;
    try {
      await axiosInstance
        .get(
          `movie?token=QFCANVB-YJK4011-KXBRXVA-652J551&page=1&limit=10&name=${event.target.value}`
        )
        .then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
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
