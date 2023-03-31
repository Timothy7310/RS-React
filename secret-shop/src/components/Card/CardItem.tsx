import { CardProps } from 'types/types';
import '../../styles/blocks/card.scss';

const CardItem = ({ card }: CardProps) => {
  return (
    <li
      className="goods-cards__item card"
      data-testid={card.itemName}
      style={{
        backgroundImage: `url(${window.URL.createObjectURL((card.itemImage1 as FileList)[0])})`,
      }}
    >
      <div className="card__date">{card.date}</div>
      <div className={`card__side card__side--${card.side}`}>{card.side}</div>
      <div className="card__hero hero">
        <img
          src={window.URL.createObjectURL((card.heroImage as FileList)[0])}
          alt=""
          className="hero__avatar"
        />
        <span className={`hero__rareness ${card.rarity}`}>{card.rarity}</span>
        <span className="hero__name">{card.heroName}</span>
      </div>
      <div className="card__price">
        <span className="card__price-val">{card.price}</span>&nbsp;
        <span className="card__price-cur">руб</span>
      </div>
      <h3 className="card__name">{card.itemName}</h3>
      {card.hasBuy && <button className="card__buy">В&nbsp;корзину</button>}
    </li>
  );
};

export default CardItem;
