// @flow

import { combineReducers } from 'redux';

import { reducer as colors } from '../components/Colors';

import * as types from './types';

export type State = {
  error: Object | null,
  loading: boolean,
  data: Object | null,
}

export const initialState: State = {
  error: null,
  loading: false,
  data: null,
}

export const reducer = combineReducers({
  main: (state: State = initialState, action: types.Action): State => {
    switch (action.type) {
      case types.DATA_FETCH_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case types.DATA_FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      case types.DATA_FETCH_FAILURE:
        return {
          ...state,
          error: action.error,
          loading: false,
        };
      default:
        return state;
    }
  },
  colors,
});

