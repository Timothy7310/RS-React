import '../../styles/blocks/modal.scss';
import { CardModalProps } from '../../types/types';

const CardModal = ({ movie, closeModal }: CardModalProps) => {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={() => closeModal(false)}></div>
      <div className="modal-content">
        <button className="modal-close" aria-label="close" onClick={() => closeModal(false)}>
          <span className="modal-close--span"></span>
          <span className="modal-close--span"></span>
        </button>

        <div className="modal-trailer">
          {Boolean(movie?.videos?.trailers?.[1]?.url) && (
            <iframe
              className="modal-trailer__iframe"
              width="386"
              height="217"
              src={movie?.videos?.trailers?.[1]?.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              color="white"
            ></iframe>
          )}
        </div>
        <div className="modal-info">
          <h3 className="modal-info__name">
            {movie?.name} ({movie?.year}) {Boolean(movie?.ageRating) && `${movie?.ageRating}+`}
          </h3>
          <span className="modal-info__name-original">{movie?.alternativeName}</span>
          <span className="modal-info__item modal-info__item--time">
            Длительность: {movie?.movieLength} мин.
          </span>
          <span className="modal-info__item modal-info__item">
            Жанры: {movie?.genres?.map((x) => x.name).join(', ')}
          </span>
          <span className="modal-info__item">
            Актеры: {movie?.persons?.map((x) => x.name).join(', ')}
          </span>
          <span className="modal-info__item">
            Страна: {movie?.countries?.map((x) => x.name).join(', ')}
          </span>
        </div>
        {Boolean(movie?.description) && (
          <div className="modal-description">
            <span className="modal-description__title">Сюжет</span>
            <div className="modal-description__line"></div>
            <p className="modal-description__text">{movie?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardModal;
