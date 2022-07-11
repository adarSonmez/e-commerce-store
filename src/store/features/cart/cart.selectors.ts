import { createSelector } from 'reselect';
import { RootState } from '../..';
import { ShopItem } from '../shop/shop.slice';

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
    Object.values(cartItems).reduce(
      (accumulatedQuantity, cartItem) =>
        (accumulatedQuantity += (cartItem as ShopItem).quantity),
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  Object.values(cartItems).reduce(
    (accumulatedQuantity, cartItem) =>
      (accumulatedQuantity +=
        (cartItem as ShopItem).price * (cartItem as ShopItem).quantity),
    0
  )
);
