import { createStore } from 'redux';

import appReducer from './reducer';
import initialState from './initialState';

const store = createStore(appReducer, initialState);

export default store;

