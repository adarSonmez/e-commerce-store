import { createSelector } from 'reselect';
import { RootState } from '../..';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  // or: (state) => state.cart,
  // ... other dependencies,
  (cart) => cart.entities
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    Object.values(cartItems).reduce((accumulatedQuantity, cartItem) => {
      if (cartItem?.quantity) {
        return (accumulatedQuantity += cartItem.quantity);
      }
      return accumulatedQuantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  Object.values(cartItems).reduce((accumulatedQuantity, cartItem) => {
    if (cartItem?.price) {
      return (accumulatedQuantity += cartItem.price * cartItem.quantity);
    }
    return accumulatedQuantity;
  }, 0)
);
