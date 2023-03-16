import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

import Layout from './components/Layout';
import './styles/fonts.scss';
import './styles/vendor.scss';
import './styles/vars.scss';
import './styles/settings.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage page={'Main'} />} />
            <Route path="about" element={<AboutUsPage page={'About'} />} />
            <Route path="*" element={<NotFoundPage page={'404'} />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
