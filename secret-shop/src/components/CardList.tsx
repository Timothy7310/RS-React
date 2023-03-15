import React from 'react';
import CardItem from './CardItem';
import { Cards } from 'types/types';
import '../styles/card-list.scss';

type CardListProps = {
  cards: Cards;
};

class CardList extends React.Component<CardListProps> {
  render() {
    return (
      <div className="cards">
        <h2 className="visually-hidden">Товары</h2>
        <ul className="goods-cards__list goods-cards__list--4">
          {this.props.cards.map((card) => (
            <CardItem card={card} key={card.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CardList;
