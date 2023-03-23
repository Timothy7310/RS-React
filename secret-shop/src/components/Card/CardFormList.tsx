import React from 'react';
import CardItem from './CardItem';
import { CardFormListProps } from 'types/types';
import '../../styles/blocks/card-list.scss';

class CardFormList extends React.Component<CardFormListProps> {
  render() {
    return (
      <div className="cards">
        <h2>New Cards</h2>
        <ul className="goods-cards__list goods-cards__list--4">
          {this.props.cards.map((card, index) => (
            <CardItem card={card} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CardFormList;
