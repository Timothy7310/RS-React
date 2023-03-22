import React from 'react';
import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';
import Form from '../components/Form';
import '../styles/blocks/form-page.scss';

class FormPage extends React.Component<CurrentPageProps> {
  constructor(props: CurrentPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header page={this.props.page} />
        <main>
          <div className="form-page">
            <div className="form-page__wrap container">
              <Form />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default FormPage;
