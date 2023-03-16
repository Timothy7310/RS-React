import React from 'react';
import Header from '../components/Header';
import { CurrentPageProps } from '../types/types';

class AboutUsPage extends React.Component<CurrentPageProps> {
  constructor(props: CurrentPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header page={this.props.page} />
        <main>
          <div>About us</div>
        </main>
      </>
    );
  }
}

export default AboutUsPage;
