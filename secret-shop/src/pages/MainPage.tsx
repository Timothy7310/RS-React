import CardList from '../components/Card/CardList';
import '../styles/blocks/goods.scss';
import Header from '../components/Header';
import { CurrentPageProps, Cards } from '../types/types';
import { useState, useEffect } from 'react';
import axiosInstance from '../services/api';
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
          await axiosInstance
            .get(`movie?token=4ZKP5GE-A9D47VB-HQ3453N-8WCS1CM&page=1&limit=12&name=${searchValue}`)
            .then((response) => {
              setCards([...response.data.docs]);
              setIsLoad(true);
            });
        } else {
          setIsLoad(false);
          await axiosInstance
            .get(`movie?token=4ZKP5GE-A9D47VB-HQ3453N-8WCS1CM&page=1&limit=12&top250=%21null`)
            .then((response) => {
              setCards([...response.data.docs]);
              setIsLoad(true);
            });
        }
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
