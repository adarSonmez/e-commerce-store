import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { logout } from '../../firebase/userAuth';
import './Header.scss';

function Header({ listenUser }) {
  const path = useLocation().pathname;

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

        {/** The art of toggling buttons */}
        {(() => {
          if (listenUser) {
            return (
              <div className="option" onClick={() => logout()}>
                SIGN OUT
              </div>
            );
          } else {
            if (path === '/signup')
              return (
                <NavLink className="option" to="/signin">
                  SIGN IN
                </NavLink>
              );
            else
              return (
                <NavLink className="option" to="/signup">
                  SIGN UP
                </NavLink>
              );
          }
        })()}
      </div>
    </div>
  );
}

export default Header;
