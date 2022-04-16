import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import './CheckoutItem.scss';

// Change quantity of each item  (add, remove, clear)
function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItem = () => dispatch(clearItemFromCart(cartItem));
  const increaseItem = () => dispatch(addItem(cartItem));
  const decreaseItem = () => dispatch(removeItem(cartItem));

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
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
