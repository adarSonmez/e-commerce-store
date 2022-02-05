import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  userAuth: null,
  userInfo: {
    id: null,
    name: null,
    email: null,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        userAuth: action.payload.userAuth,
      };
    default:
      return state;
  }
};

export default userReducer;
