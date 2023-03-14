import React from 'react';
import goods from '../assets/goods.json';
import CardList from '../components/CardList';
import '../styles/cards.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className="cards">
        <h2 className="visually-hidden">Товары</h2>
        <CardList cards={goods} />
      </div>
    );
  }
}

export default MainPage;
