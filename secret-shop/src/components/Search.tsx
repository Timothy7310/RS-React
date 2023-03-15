import React from 'react';
import '../styles/search.scss';

type SearchState = {
  value: string;
};

type SearchProps = Record<string, never>;

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      value: localStorage.getItem('searchValue') ?? '',
    };
  }

  render() {
    return (
      <>
        <input
          type="search"
          name="search"
          className="goods-cards__head-search"
          placeholder="Поиск по названию"
          onChange={(e) => this.setState({ value: e.target.value })}
          value={this.state.value}
        />
      </>
    );
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }
}

export default Search;
