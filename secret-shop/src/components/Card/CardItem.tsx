import { CardProps } from 'types/types';
import '../../styles/blocks/card.scss';
import { getRatingClassName } from '../../helper/helper';

const CardItem = ({ card }: CardProps) => {
  return (
    <li className="card">
      <div className="card-poster-wrap">
        <img
          className="card-poster"
          src={
            card?.poster?.previewUrl ??
            'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
          }
        />
        <span className={`card-rating ${getRatingClassName(card?.rating?.kp)}`}>
          {card?.rating?.kp.toFixed(1)}
        </span>
      </div>
      <h3 className="card-name">{card?.name}</h3>
      <span className="card-genres">
        {card?.year}, {card?.genres?.[0]?.name}
      </span>
    </li>
  );
};

export default CardItem;
