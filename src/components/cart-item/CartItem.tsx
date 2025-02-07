import { ShopItem } from '../../store/features/shop/shop.slice'
import './CartItem.sass'

function CartItem({ item }: { item: ShopItem }) {
  const { imageUrl, price, name, quantity } = item

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={`Product: ${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
