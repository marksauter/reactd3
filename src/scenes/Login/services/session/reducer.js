// @flow

import type { Action } from './actions';
import { types } from './actions';

type State = {
  auth: boolean,
}

export const initialState: State = {
  auth: false,
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.AUTHENTICATE_USER:
      return {
        ...state,
        auth: true,
      }
    default:
      return state;
  }
}

