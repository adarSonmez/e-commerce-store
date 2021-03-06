import { NavLink, useLocation } from 'react-router-dom'

import { logout } from '../../utils/firebase/userAuth'
import CartDropdown from '../cart-dropdown/CartDropdown'
import CartIcon from '../cart-icon/CartIcon'
import LOGO_URL from '../../assets/logo2.png'
import { selectUserInfo } from '../../store/features/auth/auth.selectors'
import { useAppSelector } from '../../store/hooks'

import './Header.sass'

function Header({ userName }: { userName: string | null }) {
  const { pathname } = useLocation()
  const user = useAppSelector(selectUserInfo)

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
          if (user.id) {
            return (
              <div className="option" onClick={logout}>
                SIGN OUT
              </div>
            )
          } else {
            if (pathname === '/signup')
              return (
                <NavLink className="option" to="/signin">
                  SIGN IN
                </NavLink>
              )
            else
              return (
                <NavLink className="option" to="/signup">
                  SIGN UP
                </NavLink>
              )
          }
        })()}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  )
}

export default Header
