import { createSelector } from 'reselect';
import { RootState } from '../..';
import { ShopItem } from '../shop/shop.slice';

const selectCart = (state: RootState) => state.cart;

export const selectCartEntities = createSelector(
  [selectCart],
  // or: (state) => state.cart,
  // ... other dependencies,
  (cart) => cart.entities
);

export const selectCartArray = createSelector(
  [selectCartEntities],
  // or: (state) => state.cart,
  // ... other dependencies,
  (items) => Object.values(items)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartArray],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        (accumulatedQuantity += (cartItem as ShopItem).quantity),
      0
    )
);

export const selectCartTotal = createSelector([selectCartArray], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      (accumulatedQuantity +=
        (cartItem as ShopItem).price * (cartItem as ShopItem).quantity),
    0
  )
);
