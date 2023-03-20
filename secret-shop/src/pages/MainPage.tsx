import React from 'react';
import goods from '../assets/goods.json';
import CardList from '../components/CardList';
import '../styles/blocks/goods.scss';
import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';

class MainPage extends React.Component<CurrentPageProps> {
  constructor(props: CurrentPageProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Header page={this.props.page} />
        <main>
          <div className="goods">
            <div className="goods__wrap container">
              <CardList cards={goods} />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default MainPage;
