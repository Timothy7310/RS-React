import React from 'react';
import goods from '../assets/goods.json';
import CardList from '../components/Card/CardList';
import '../styles/blocks/goods.scss';
import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';

const MainPage = ({ page }: CurrentPageProps) => {
  return (
    <>
      <Header page={page} />
      <main>
        <div className="goods">
          <div className="goods__wrap container">
            <CardList cards={goods} />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
