import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/features/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import './CheckoutPage.scss';
import PaymentForm from '../../components/payment-form/PaymentForm';

/* Since this is a portfolio project, payment cannot be made, 
  but test payment can be made with the card number given by stripe. */
function CheckoutPage() {
  const cartItems = Object.values(useSelector(selectCartItems));
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page page">
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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <PaymentForm />

      <div className="test-warning">
        Please use the following test credit card for payments!
        <p className="test-cart-info">
          4242 4242 4242 4242 - Exp: 01/30 - CVC: 123
        </p>
      </div>
    </div>
  );
}

export default CheckoutPage;
