import CardList from '../components/Card/CardList';
import '../styles/blocks/goods.scss';
import Header from '../components/Header';
import { CurrentPageProps, Cards } from '../types/types';
import { useState, useEffect } from 'react';
import CardLoader from '../components/Card/CardLoader';
import Search from '../components/Search';
import { useAppSelector } from '../hooks/redux';
import { movieAPI } from '../services/MovieService';

const MainPage = ({ page }: CurrentPageProps) => {
  const searchValue = useAppSelector((state) => state.searchSliceReducer.value);

  const [cards, setCards] = useState<Cards>([]);
  const [isLoad, setIsLoad] = useState(false);

  const { data: moviesTop250, isFetching: isFetchingTop } = movieAPI.useFetchTop250Query(12);
  const { data: movieSearch, isFetching: isFetchingSearch } =
    movieAPI.useFetchSearchMovieQuery(searchValue);

  useEffect(() => {
    if (searchValue.length === 0) {
      setIsLoad(!isFetchingTop);
      if (moviesTop250) {
        setCards([...moviesTop250.docs]);
      }
    } else {
      setIsLoad(!isFetchingSearch);
      if (movieSearch) {
        setCards([...movieSearch.docs]);
      }
    }
  }, [searchValue, movieSearch, moviesTop250, isFetchingTop, isFetchingSearch]);

  return (
    <>
      <Header page={page} />
      <main>
        <div className="goods">
          <div className="goods__wrap container">
            <Search />
            {isLoad ? <CardList cards={cards} /> : <CardLoader />}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
