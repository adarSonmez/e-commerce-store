import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

let middleWares = [thunk];

// Hide logger in production
if (process.env.NODE_ENV === 'development') middleWares.push(logger);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
