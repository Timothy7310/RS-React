import React from 'react';
import '../styles/error.scss';

class NotFoundPage extends React.Component {
  render() {
    return (
      <section className="error">
        <h2 className="error__title visually-hidden">Страница не найдена</h2>
      </section>
    );
  }
}

export default NotFoundPage;
