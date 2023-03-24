import React from 'react';
import Header from '../components/Header';
import { CurrentPageProps, FormCard } from '../types/types';
import Form from '../components/Form/Form';
import '../styles/blocks/form-page.scss';
import CardFormList from '../components/Card/CardFormList';

class FormPage extends React.Component<CurrentPageProps, { cards: FormCard[] }> {
  constructor(props: CurrentPageProps) {
    super(props);
    this.state = {
      cards: [],
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card: FormCard) {
    console.log(this.state);
    this.setState((formPageState) => {
      return { cards: [...formPageState.cards, card] };
    });
  }

  render() {
    return (
      <>
        <Header page={this.props.page} />
        <main>
          <div className="form-page">
            <div className="form-page__wrap container">
              <Form cardValue={(value) => this.addCard(value)} />
              {this.state.cards.length > 0 && <CardFormList cards={this.state.cards} />}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default FormPage;
