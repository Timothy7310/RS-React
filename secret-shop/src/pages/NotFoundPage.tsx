import React from 'react';
import '../styles/blocks/error.scss';
import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';

class NotFoundPage extends React.Component<CurrentPageProps> {
  constructor(props: CurrentPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header page={this.props.page} />
        <main>
          <section className="error">
            <h2 className="error__title visually-hidden">Страница не найдена</h2>
          </section>
        </main>
      </>
    );
  }
}

export default NotFoundPage;
