import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//import { persistStore } from 'redux-persist';
//import logger from 'redux-logger';
//import thunk from 'redux-thunk';

import cartReducer from './cart/cart.slice';
import userReducer from './user/user.slice';
import shopReducer from './shop/shop.slice';
import directoryReducer from './directory/directory.slice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

//let middleWares = [thunk];

// Hide logger in production
//if (process.env.NODE_ENV === 'development') middleWares.push(logger);

//const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = configureStore({ reducer: rootReducer });
//export const persistor = persistStore(store);

export default store;
