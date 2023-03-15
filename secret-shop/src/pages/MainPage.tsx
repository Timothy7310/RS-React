import React from 'react';
import goods from '../assets/goods.json';
import CardList from '../components/CardList';
import '../styles/goods.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className="goods">
        <div className="goods__wrap container">
          <CardList cards={goods} />
        </div>
      </div>
    );
  }
}

export default MainPage;
