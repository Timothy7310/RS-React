import React from 'react';
import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';

class FormPage extends React.Component<CurrentPageProps> {
  constructor(props: CurrentPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header page={this.props.page} />
        <main>
          <div>Form page</div>
        </main>
      </>
    );
  }
}

export default FormPage;
