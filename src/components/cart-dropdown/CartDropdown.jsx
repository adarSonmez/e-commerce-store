import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectCartHidden,
  selectCartItems,
} from '../../store/features/cart/cart.selectors';
import { toggleHidden } from '../../store/features/cart/cart.slice';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';

// Shows the items added to the cart
function CartDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = Object.values(useSelector(selectCartItems));
  const cartHidden = useSelector(selectCartHidden);

  const handleGoToClick = () => {
    navigate('/checkout');
    dispatch(toggleHidden());
  };

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
  );
}

export default CartDropdown;
