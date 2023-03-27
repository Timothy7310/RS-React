import React from 'react';
import '../styles/blocks/search.scss';
import { EmptyProps, SearchState } from 'types/types';

class Search extends React.Component<EmptyProps, SearchState> {
  constructor(props: EmptyProps) {
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
