import { createSelector } from 'reselect';
import { RootState } from '../..';

const selectAuth = (state: RootState) => state.auth;

export const selectUserInfo = createSelector(
  [selectAuth],
  (user) => user
);
