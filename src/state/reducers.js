// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as auth } from 'scenes/Login';
import { reducer as reactd3 } from 'scenes/ReactD3';

const reducer = combineReducers({
  auth,
  reactd3,
  form,
});

export default reducer;

