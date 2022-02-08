import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectUserAuth } from '../../redux/user/user.selectors';
import { logout } from '../../firebase/userAuth';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';

import LOGO_URL from '../../assets/logo2.png';
import './Header.scss';

function Header({ userAuth, userName }) {
  const path = useLocation().pathname;

  // Create header with navigation links and logo.
  return (
    <div className="header">
      <div className="user-name">{userName}</div>
      <NavLink className="logo-container" to="/">
        <img src={LOGO_URL} alt="My Boutique Logo" />
        <span>My Boutique</span>
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <a
          className="option"
          href="http://www.adarsonmez.software/"
          target="_blank"
          rel="noreferrer"
        >
          CONTACT
        </a>

        {/** Toggling sign in and sign up buttons */}
        {(() => {
          if (userAuth) {
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
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  userAuth: selectUserAuth,
});

export default connect(mapStateToProps)(Header);
