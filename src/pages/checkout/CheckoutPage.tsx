import {
  selectCartArray,
  selectCartTotal,
} from '../../store/features/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import './CheckoutPage.sass'
import PaymentForm from '../../components/payment-form/PaymentForm'
import { ShopItem } from '../../store/features/shop/shop.slice'
import { useAppSelector } from '../../store/hooks'

/* Since this is a portfolio project, payment cannot be made, 
  but test payment can be made with the card number given by stripe. */
function CheckoutPage() {
  const cartItems = useAppSelector(selectCartArray)
  const total = useAppSelector(selectCartTotal)

  return (
    <section className="checkout-page page">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <p role="alert" className="empty-cart-message">
          Your cart is empty
        </p>
      ) : (
        cartItems.map((cartItem) => (
          <CheckoutItem
            key={(cartItem as ShopItem).id}
            cartItem={cartItem as ShopItem}
          />
        ))
      )}

      <div className="total" aria-live="polite">
        TOTAL: ${total}
      </div>

      <PaymentForm />

      <div className="test-warning" role="alert">
        <p>Please use the following test credit card for payments:</p>
        <p className="test-cart-info">
          4242 4242 4242 4242 - Exp: 01/30 - CVC: 123
        </p>
      </div>
    </section>
  )
}

export default CheckoutPage
