import cartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

/* 
What does state = INITIAL_STATE means as parameter?
Default function parameters allow formal parameters to be initialized with 
default values if no value or undefined is passed. 
*/
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
