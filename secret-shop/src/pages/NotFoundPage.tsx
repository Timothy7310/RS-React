import React from 'react';
import '../styles/blocks/error.scss';
import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';

const NotFoundPage = ({ page }: CurrentPageProps) => {
  return (
    <>
      <Header page={page} />
      <main>
        <section className="error">
          <h2 className="error__title visually-hidden">Страница не найдена</h2>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
