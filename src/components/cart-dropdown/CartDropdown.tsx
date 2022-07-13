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

// Shows the items added to the cart
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
    <div className={`cart-dropdown ${cartHidden ? 'hidden-cart' : ''}`}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleGoToClick}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
