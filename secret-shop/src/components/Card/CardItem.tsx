import React from 'react';
import { CardProps } from 'types/types';
import '../../styles/blocks/card.scss';

class CardItem extends React.Component<CardProps> {
  render() {
    return (
      <li
        className="goods-cards__item card"
        data-testid={this.props.card.itemName}
        style={{
          backgroundImage: `url(${this.props.card.itemImage1 || this.props.card.itemImage2})`,
        }}
      >
        <div className="card__date">{this.props.card.date}</div>
        <div className={`card__side card__side--${this.props.card.side}`}>
          {this.props.card.side}
        </div>
        <div className="card__hero hero">
          <img src={this.props.card.heroImage as string} alt="" className="hero__avatar" />
          <span className={`hero__rareness ${this.props.card.rarity}`}>
            {this.props.card.rarity}
          </span>
          <span className="hero__name">{this.props.card.heroName}</span>
        </div>
        <div className="card__price">
          <span className="card__price-val">{this.props.card.price}</span>&nbsp;
          <span className="card__price-cur">руб</span>
        </div>
        <h3 className="card__name">{this.props.card.itemName}</h3>
        {this.props.card.hasBuy && <button className="card__buy">В&nbsp;корзину</button>}
      </li>
    );
  }
}

export default CardItem;
