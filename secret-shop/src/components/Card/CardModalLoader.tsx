import '../../styles/blocks/card-modal-loader.scss';

const CardModalLoader = () => {
  return (
    <div className="card-modal-loader-wrap">
      <span className="card-modal-loader-overlay"></span>
      <span className="card-modal-loader"></span>
    </div>
  );
};

export default CardModalLoader;
