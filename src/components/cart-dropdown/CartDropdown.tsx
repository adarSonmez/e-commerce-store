import { useNavigate } from 'react-router-dom'
import {
  selectCartArray,
  selectCartHidden,
} from '../../store/features/cart/cart.selectors'
import { toggleHidden } from '../../store/features/cart/cart.slice'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import './CartDropdown.sass'
import { ShopItem } from '../../store/features/shop/shop.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

function CartDropdown() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartArray) as ShopItem[]
  const cartHidden = useAppSelector(selectCartHidden) as boolean

  const handleGoToClick = () => {
    navigate('/checkout')
    dispatch(toggleHidden())
  }

  return (
    <section className={`cart-dropdown ${cartHidden ? 'hidden-cart' : ''}`} aria-live="polite">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <p role="alert" className="empty-message">
            Your cart is empty
          </p>
        )}
      </div>
      <CustomButton onClick={handleGoToClick} aria-label="Proceed to checkout">
        GO TO CHECKOUT
      </CustomButton>
    </section>
  )
}

export default CartDropdown
