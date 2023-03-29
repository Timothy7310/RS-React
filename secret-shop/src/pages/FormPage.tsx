import React, { useState } from 'react';
import Header from '../components/Header';
import { CurrentPageProps, FormCard } from '../types/types';
import Form from '../components/Form/Form';
import '../styles/blocks/form-page.scss';
import CardFormList from '../components/Card/CardFormList';

const FormPage = ({ page }: CurrentPageProps) => {
  const [cards, setCard] = useState<FormCard[]>([]);

  return (
    <>
      <Header page={page} />
      <main>
        <div className="form-page">
          <div className="form-page__wrap container">
            <Form cardValue={(value) => setCard([...cards, value])} />
            {cards.length > 0 && <CardFormList cards={cards} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default FormPage;
