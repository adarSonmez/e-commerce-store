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

  return (
    <nav className="header" role="navigation" aria-label="Main navigation">
      <p className="user-name" aria-label="Logged in as">{userName}</p>
      <NavLink className="logo-container" to="/" aria-label="Go to homepage">
        <img src={LOGO_URL} alt="My Boutique Logo - Navigate to Home" />
        <span>My Boutique</span>
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <a
          className="option"
          href="https://www.linkedin.com/in/adar-sonmez/"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact (opens in a new tab)"
        >
          CONTACT
        </a>

        {user.id ? (
          <button className="option transparent" onClick={logout}>
            SIGN OUT
          </button>
        ) : pathname === '/signup' ? (
          <NavLink className="option" to="/signin">
            SIGN IN
          </NavLink>
        ) : (
          <NavLink className="option" to="/signup">
            SIGN UP
          </NavLink>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </nav>
  )
}

export default Header
