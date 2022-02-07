import { combineReducers } from 'redux';

// This is actual local storage object on window browser
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';

/* You can have access to session storage object as shown below
import sessionStorage from "redux-persist/es/storage/session"; 
*/

const persistConfig = {
  key: 'root', // Location at reducer object we want to start storing everything.
  storage,
  whiteList: ['cart'], // Don't add user because session of users handles by firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
