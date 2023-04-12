import CardList from '../components/Card/CardList';
import '../styles/blocks/goods.scss';
import Header from '../components/Header';
import { CurrentPageProps, Cards } from '../types/types';
import { useState, useEffect } from 'react';
import { searchMovie, getTop250 } from '../services/api';
import CardLoader from '../components/Card/CardLoader';
import Search from '../components/Search';
import { useAppSelector } from '../hooks/redux';

const MainPage = ({ page }: CurrentPageProps) => {
  const searchValue = useAppSelector((state) => state.searchSliceReducer.value);

  const [cards, setCards] = useState<Cards>([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      try {
        if (searchValue.length > 0) {
          setIsLoad(false);
          const response = await searchMovie(searchValue);
          setCards([...response.data.docs]);
        } else {
          setIsLoad(false);
          const response = await getTop250();
          setCards([...response.data.docs]);
        }
        setIsLoad(true);
      } catch (err) {
        console.log(err);
      }
    };

    getCards();
  }, [searchValue]);

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
