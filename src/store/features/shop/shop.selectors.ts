import { createSelector } from 'reselect'
import { RootState } from '../..'

const selectShop = (state: RootState) => state.shop

// Select thunk status
export const selectShopRequestStatus = createSelector(
  [selectShop],
  (shop) => shop.status
)

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollectionsAsArray = createSelector(
  [selectCollections],
  (collections) =>
    // Object to array
    collections
      ? Object.keys(collections).map((title) => collections[title])
      : []
)

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
