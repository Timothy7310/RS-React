import CardFormItem from './CardFormItem';
import { CardFormListProps } from 'types/types';
import '../../styles/blocks/card-list.scss';

const CardFormList = ({ cards }: CardFormListProps) => {
  return (
    <div className="cards">
      <h2>New Cards</h2>
      <ul className="goods-cards__list goods-cards__list--4">
        {cards.map((card, index) => (
          <CardFormItem card={card} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default CardFormList;
