import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleHidden } from '../../redux/cart/cart.slice';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

// Shows the number of products in the cart.
function CartIcon() {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  const toggleDropdown = () => dispatch(toggleHidden());

  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
