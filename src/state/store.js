// @flow

import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import sagas from './sagas';

// Sagas middleware
const sagaMiddleware = createSagaMiddleware();

// Redux DevTools
const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// Redux store
const configureStore = initialState => {
  return createStore(
    reducer,
    initialState,
    composeSetup(applyMiddleware(sagaMiddleware)),
  );
};

const store = configureStore();

// Start up sagas
sagaMiddleware.run(sagas);

export default store;

