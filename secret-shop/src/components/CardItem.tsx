import React from 'react';
import { CardProps } from 'types/types';
import '../styles/card.scss';

class CardItem extends React.Component<CardProps> {
  render() {
    return (
      <li
        className="goods-cards__item card"
        style={{ backgroundImage: `url(${this.props.card.img1})` }}
      >
        <div className="card__hero hero">
          <img src={this.props.card['hero-icon']} alt="" className="hero__avatar" />
          <span className="hero__rareness mythical">{this.props.card.rarity}</span>
          <span className="hero__name">{this.props.card.hero}</span>
        </div>
        <div className="card__price">
          <span className="card__price-val">{this.props.card.price}</span>&nbsp;
          <span className="card__price-cur">руб</span>
        </div>
        <h3 className="card__name">{this.props.card['item-name']}</h3>
        <button className="card__buy">В&nbsp;корзину</button>
      </li>
    );
  }
}

export default CardItem;
