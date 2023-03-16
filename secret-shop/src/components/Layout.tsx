import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
