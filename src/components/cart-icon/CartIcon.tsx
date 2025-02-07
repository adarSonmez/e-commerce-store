import { toggleHidden } from '../../store/features/cart/cart.slice'
import { selectCartItemsCount } from '../../store/features/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import './CartIcon.sass'

function CartIcon() {
  const dispatch = useAppDispatch()
  const itemCount = useAppSelector(selectCartItemsCount)

  const toggleDropdown = () => dispatch(toggleHidden())

  return (
    <button
      className="cart-icon transparent-button"
      onClick={toggleDropdown}
      aria-label="Toggle cart dropdown"
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count" aria-live="polite">
        {itemCount}
      </span>
    </button>
  )
}

export default CartIcon
