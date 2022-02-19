import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

let middleWares = [];

// Hide logger in production
if (process.env.NODE_ENV === 'development') {
  middleWares = [logger];
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);
