import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

let middleWares = [];

if (process.env.NODE_ENV === 'development') {
  middleWares = [logger];
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);
