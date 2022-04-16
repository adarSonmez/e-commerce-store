import { createAction } from '../reducer.utils';
import { shopActionTypes } from './shop.types';

export const updateCollections = (collectionsMap) =>
  createAction(shopActionTypes.UPDATE_COLLECTIONS, collectionsMap);
