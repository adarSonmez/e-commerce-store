import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  userAuth: null,
  userInfo: {
    id: null,
    name: null,
    email: null,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      if (payload !== null)
        return {
          ...state,
          userInfo: payload.userInfo,
          userAuth: payload.userAuth,
        };
      else return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
