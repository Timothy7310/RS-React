import { CardFormProps } from '../../types/types';
import '../../styles/blocks/card.scss';
import { getRatingClassName } from '../../helper/helper';

const CardFormItem = ({ card }: CardFormProps) => {
  return (
    <li className="card">
      <div className="card-poster-wrap">
        <img className="card-poster" src={card.poster as string} />
        {(card.hasRating as boolean) && (
          <span className={`card-rating ${getRatingClassName(Number(card.rating))}`}>
            {card.rating as number}
          </span>
        )}
      </div>
      <h3 className="card-name">{card.name as string}</h3>
      <span className="card-genres">
        {card.date as string}, {card.genre as string}
      </span>
      <span
        className={
          (card.typeWatch as string) === 'Will watch'
            ? `card-type card-type--will-watch`
            : `card-type card-type--watched`
        }
      >
        {(card.typeWatch as string) === 'Will watch'
          ? `${card.typeWatch} ⏱`
          : `${card.typeWatch} ✔`}
      </span>
    </li>
  );
};

export default CardFormItem;
