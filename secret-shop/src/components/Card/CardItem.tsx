import { CardProps } from 'types/types';
import '../../styles/blocks/card.scss';
import { getRatingClassName } from '../../helper/helper';

const CardItem = ({ card }: CardProps) => {
  return (
    <li className="card">
      <div className="card-img-wrap">
        <img className="card-poster" src={card.poster.previewUrl} />
        <span className={`card-rating ${getRatingClassName(card.rating.kp)}`}>
          {card.rating.kp.toFixed(1)}
        </span>
      </div>
      <h3 className="card-name">{card.name}</h3>
      <span className="card-genres">
        {card.year}, {card.genres[0].name}
      </span>
    </li>
  );
};

export default CardItem;
