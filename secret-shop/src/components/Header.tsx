import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrap container">
          <NavLink to="/" className="header__logo">
            <img src={logo} className="header__logo-icon" alt="" />
            <h1 className="header__logo-text">Secret Shop</h1>
          </NavLink>
          <nav className="header__nav">
            <NavLink to="/" className={({ isActive }) => this.getActiveClass(isActive)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => this.getActiveClass(isActive)}>
              About us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }

  getActiveClass(isActive: boolean) {
    return isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link';
  }
}

export default Header;
