import { shopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        collections: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
