import { CardProps } from 'types/types';
import '../../styles/blocks/card.scss';

const CardItem = ({ card }: CardProps) => {
  const getImageUrl = (img: string) => {
    return (
      img ||
      'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg'
    );
  };

  return (
    <li
      className="goods-cards__item card"
      data-testid={card.itemName}
      style={{
        backgroundImage: `url(${getImageUrl(card.itemImage1 as string)})`,
      }}
    >
      <div className="card__date">{card.date as string}</div>
      <div className={`card__side card__side--${card.side}`}>{card.side as string}</div>
      <div className="card__hero hero">
        <img src={getImageUrl(card.heroImage as string)} alt="" className="hero__avatar" />
        <span className={`hero__rareness ${card.rarity}`}>{card.rarity as string}</span>
        <span className="hero__name">{card.heroName as string}</span>
      </div>
      <div className="card__price">
        <span className="card__price-val">{card.price as number}</span>&nbsp;
        <span className="card__price-cur">руб</span>
      </div>
      <h3 className="card__name">{card.itemName as string}</h3>
      {card.hasBuy && <button className="card__buy">В&nbsp;корзину</button>}
    </li>
  );
};

export default CardItem;
