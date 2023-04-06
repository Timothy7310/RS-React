import React, { useState } from 'react';
import { CardProps } from 'types/types';
import '../../styles/blocks/card.scss';
import { getRatingClassName } from '../../helper/helper';
import { getMovieByID } from '../../services/api';
import { Card } from 'types/types';
import CardModal from './CardModal';
import CardModalLoader from './CardModalLoader';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const CardItem = ({ card }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieData, setMovieData] = useState<Card | Record<string, never>>({});
  const [isLoading, setIsLoading] = useState(false);

  const openModal = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    const id = target.dataset?.move as string;
    setIsLoading(true);
    const movie = await getMovieByID(id);
    setMovieData({ ...movie.data });
    setIsLoading(false);
    setIsOpen(true);
  };

  // HI :) this is only used to disable scrolling,
  // if you don't like using DOM, then write I will delete this section of code

  isOpen
    ? disableBodyScroll(document.body as HTMLElement)
    : enableBodyScroll(document.body as HTMLElement);

  return (
    <li className="card">
      <button className="card-wrap" data-move={card?.id} onClick={(event) => openModal(event)}>
        <div className="card-poster-wrap">
          {isLoading && <CardModalLoader />}
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
        <div className="card-bottom">
          <h3 className="card-name">{card?.name}</h3>
          {Boolean(card?.alternativeName) && (
            <span className="card-name--original">{card?.alternativeName}</span>
          )}
          <span className="card-genres">
            {card?.year}, {card?.genres?.[0]?.name}
          </span>
        </div>
      </button>
      {isOpen && !isLoading && <CardModal movie={movieData as Card} closeModal={setIsOpen} />}
    </li>
  );
};

export default CardItem;
