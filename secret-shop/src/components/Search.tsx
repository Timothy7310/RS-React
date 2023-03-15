import React from 'react';
import '../styles/search.scss';

class Search extends React.Component {
  render() {
    return (
      <>
        <input
          type="search"
          name="search"
          className="goods-cards__head-search"
          placeholder="Поиск по названию"
        />
      </>
    );
  }
}

export default Search;
