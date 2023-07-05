import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/blocks/header.scss';
import CurrentPage from './CurrentPage';
import { CurrentPageProps } from '../types/types';

const Header = ({ page }: CurrentPageProps) => {
  const getActiveClass = (isActive: boolean) => {
    return isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link';
  };

  return (
    <header className="header">
      <div className="header__wrap container">
        <NavLink to="/" className="header__logo">
          <img src={logo} className="header__logo-icon" alt="" />
          <h1 className="header__logo-text">Secret Shop</h1>
        </NavLink>
        <CurrentPage page={page} />
        <nav className="header__nav">
          <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => getActiveClass(isActive)}>
            About us
          </NavLink>
          <NavLink to="/form" className={({ isActive }) => getActiveClass(isActive)}>
            Form
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
