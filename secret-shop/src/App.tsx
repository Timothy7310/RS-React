import { Routes, Route, Link } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

import Layout from './components/Layout';
import './styles/fonts.scss';
import './styles/vendor.scss';
import './styles/vars.scss';
import './styles/settings.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
