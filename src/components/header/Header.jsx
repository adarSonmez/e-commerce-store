import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { logout } from '../../firebase/auth';
import './Header.scss';

function Header({ listenUser }) {
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

        {/** Toggle between sign in and sign out button based on auth status*/}
        {listenUser ? (
          <div className="option" onClick={() => logout()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            SIGN IN
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
