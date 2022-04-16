import cartActionTypes from './cart.types';
import { createAction } from '../reducer.utils';

export const toggleCartHidden = () => createAction(cartActionTypes.TOGGLE_CART_HIDDEN, null);

export const addItem = (item) => createAction(cartActionTypes.ADD_ITEM, item);

export const removeItem = (item) => createAction(cartActionTypes.REMOVE_ITEM, item);

export const clearItemFromCart = (item) => createAction(cartActionTypes.CLEAR_ITEM_FROM_CART, item);
