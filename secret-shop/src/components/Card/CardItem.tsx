import { CardProps } from 'types/types';
import '../../styles/blocks/card.scss';

const CardItem = ({ card }: CardProps) => {
  const getImageUrl = (img: string | FileList) => {
    if (typeof img === 'string') {
      return img;
    }
    return window.URL.createObjectURL((img as FileList)[0]);
  };

  return (
    <li
      className="goods-cards__item card"
      data-testid={card.itemName}
      style={{
        backgroundImage: `url(${
          getImageUrl(card.itemImage1 as string | FileList) ||
          'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg'
        })`,
      }}
    >
      <div className="card__date">{card.date}</div>
      <div className={`card__side card__side--${card.side}`}>{card.side}</div>
      <div className="card__hero hero">
        <img
          src={getImageUrl(card.heroImage as string | FileList)}
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
