import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';

function Header() {
  // Create header with navigation links and logo.
  return (
    <div className="header">
      <NavLink className="logo-container" to="/">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
