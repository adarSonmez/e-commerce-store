import { toggleHidden } from '../../store/features/cart/cart.slice';
import { selectCartItemsCount } from '../../store/features/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

// Shows the number of products in the cart.
const CartIcon = () => {
  const dispatch = useAppDispatch();
  const itemCount = useAppSelector(selectCartItemsCount);

  const toggleDropdown = () => dispatch(toggleHidden());

  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
