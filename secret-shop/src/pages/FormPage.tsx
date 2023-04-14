import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';
import '../styles/blocks/form-page.scss';
import CardFormList from '../components/Card/CardFormList';
import Form from '../components/Form/Form';
import { useAppSelector } from '../hooks/redux';

const FormPage = ({ page }: CurrentPageProps) => {
  const cardsRedux = useAppSelector((state) => state.formSliceReducer.cards);

  return (
    <>
      <Header page={page} />
      <main>
        <div className="form-page">
          <div className="form-page__wrap container">
            <Form />
            {cardsRedux.length > 0 && <CardFormList cards={cardsRedux} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default FormPage;
