import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

// Select thunk status
export const selectShopRequestStatus = createSelector(
  [selectShop],
  (shop) => shop.status
);

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsAsArray = createSelector(
  [selectCollections],
  (collections) =>
    // Object to array
    collections
      ? Object.keys(collections).map((title) => collections[title])
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );