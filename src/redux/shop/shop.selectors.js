import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsAsArray = createSelector(
  [selectCollections],
  (collections) =>
    collections
      ? Object.keys(collections).map((title) => collections[title])
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollectionsAsArray], (collections) =>
    collections
      ? collections.filter((c) => c.routeName === collectionUrlParam)
      : null
  );
