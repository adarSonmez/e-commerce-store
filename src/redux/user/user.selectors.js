import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectUserAuth = createSelector(
  [selectUser],
  (user) => user.userAuth
);

export const selectUserInfo = createSelector(
  [selectUser],
  (user) => user.userInfo
);
