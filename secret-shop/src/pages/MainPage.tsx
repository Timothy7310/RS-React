import CardList from '../components/Card/CardList';
import '../styles/blocks/goods.scss';
import Header from '../components/Header';
import { CurrentPageProps, Cards } from '../types/types';
import { useState, useEffect } from 'react';
import { axiosInstance, searchMovie, getTop250 } from '../services/api';
import CardLoader from '../components/Card/CardLoader';
import Search from '../components/Search';

const MainPage = ({ page }: CurrentPageProps) => {
  const [cards, setCards] = useState<Cards>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');

  useEffect(() => {
    const getCards = async () => {
      try {
        if (searchValue) {
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
            <Search
              searchValue={(value) => {
                setSearchValue(value ?? searchValue);
              }}
            />
            {isLoad ? <CardList cards={cards} /> : <CardLoader />}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
