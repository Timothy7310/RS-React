import { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/blocks/search.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { searchSlice } from '../redux/reducers/SearchReducer';

const Search = () => {
  const dispatch = useAppDispatch();
  const reduxValue = useAppSelector((state) => state.searchSliceReducer.value);

  const [value, setValue] = useState(reduxValue ?? '');

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchSlice.actions.typing(value));
  };

  return (
    <>
      <div className="search-wrap">
        <form action="" className="search-form" onSubmit={(event) => handelSubmit(event)}>
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
