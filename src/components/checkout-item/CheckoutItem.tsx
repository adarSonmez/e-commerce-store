import {
  clearItem,
  addItem,
  reduceItem,
} from '../../store/features/cart/cart.slice'
import { ShopItem } from '../../store/features/shop/shop.slice'
import { useAppDispatch } from '../../store/hooks'
import './CheckoutItem.sass'

function CheckoutItem({ cartItem }: { cartItem: ShopItem }) {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useAppDispatch()

  const clearItemFromCart = () => dispatch(clearItem(cartItem))
  const increaseItem = () => dispatch(addItem(cartItem))
  const decreaseItem = () => dispatch(reduceItem(cartItem))

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} product`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button
          className="arrow transparent-button"
          onClick={decreaseItem}
          aria-label={`Decrease quantity of ${name}`}
        >
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button
          className="arrow transparent-button"
          onClick={increaseItem}
          aria-label={`Increase quantity of ${name}`}
        >
          &#10095;
        </button>
      </span>
      <span className="price">${price}</span>
      <button
        className="remove-button transparent-button"
        onClick={clearItemFromCart}
        aria-label={`Remove ${name} from cart`}
      >
        &#10005;
      </button>
    </div>
  )
}

export default CheckoutItem
