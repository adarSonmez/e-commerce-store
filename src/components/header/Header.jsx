import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../firebase/userAuth';

import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';
import './Header.scss';

function Header({ userAuth, hidden }) {
  console.log(userAuth);
  const path = useLocation().pathname;

  // Create header with navigation links and logo.
  return (
    <div className="header">
      <NavLink className="logo-container" to="/">
        Lebas<span> Boutique</span>
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
          CONTACT
        </NavLink>

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
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = ({ user: { userAuth }, cart: { hidden } }) => ({
  userAuth,
  hidden,
});

export default connect(mapStateToProps)(Header);
