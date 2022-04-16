import { userActionTypes } from './user.types';
import { createAction } from '../reducer.utils';

export const setCurrentUser = (user) =>
  createAction(userActionTypes.SET_CURRENT_USER, user);
