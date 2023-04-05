import CardList from '../components/Card/CardList';
import '../styles/blocks/goods.scss';
import Header from '../components/Header';
import { CurrentPageProps, Cards } from '../types/types';
import { useState, useEffect } from 'react';
import axiosInstance from '../services/api';

const MainPage = ({ page }: CurrentPageProps) => {
  const [cards, setCards] = useState<Cards>([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      try {
        await axiosInstance
          .get(`movie?token=QFCANVB-YJK4011-KXBRXVA-652J551&page=1&limit=10&top250=%21null`)
          .then((response) => {
            setCards([...cards, ...response.data.docs]);
            setIsLoad(true);
          });
      } catch (err) {
        console.log(err);
      }
    };

    getCards();
  }, []);

  return (
    <>
      <Header page={page} />
      <main>
        <div className="goods">
          <div className="goods__wrap container">
            {isLoad ? <CardList cards={cards} /> : 'Loading...'}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
