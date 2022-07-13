import {
  clearItem,
  addItem,
  reduceItem,
} from '../../store/features/cart/cart.slice'
import { ShopItem } from '../../store/features/shop/shop.slice'
import { useAppDispatch } from '../../store/hooks'
import './CheckoutItem.sass'

// Change quantity of each item  (add, remove, clear)
function CheckoutItem({ cartItem }: { cartItem: ShopItem }) {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useAppDispatch()

  const clearItemFromCart = () => dispatch(clearItem(cartItem))
  const increaseItem = () => dispatch(addItem(cartItem))
  const decreaseItem = () => dispatch(reduceItem(cartItem))

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {' '}
        <div className="arrow" onClick={decreaseItem}>
          {/* Remove icon is from UTF-8 Dingbats */}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromCart}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
