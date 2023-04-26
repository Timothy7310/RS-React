import CardItem from './CardItem';
import { CardListProps } from 'types/types';
import '../../styles/blocks/card-list.scss';
import EmptyResultMessage from './EmptyResultMessage';

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="cards">
      <h2 className="visually-hidden">Результат</h2>
      <ul className="goods-cards__list goods-cards__list--4">
        {cards.length === 0 ? (
          <EmptyResultMessage />
        ) : (
          cards.map((card) => <CardItem card={card} key={card.id} />)
        )}
      </ul>
    </div>
  );
};

export default CardList;
