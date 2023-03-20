import React from 'react';
import { CurrentPageProps } from '../types/types';

class CurrentPage extends React.Component<CurrentPageProps> {
  constructor(props: CurrentPageProps) {
    super(props);
  }
  render() {
    return (
      <>
        <h2>Current Page: {this.props.page}</h2>
      </>
    );
  }
}

export default CurrentPage;
