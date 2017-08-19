// @flow

import * as types from './types';

export type State = {
  reversed: boolean,
}

export const initialState: State = {
  reversed: false,
};

export const reducer =
  (state: State = initialState, action: types.Action): State => {
    switch (action.type) {
      case types.REVERSE_SWATCHES:
        return {
          ...state,
          reversed: !state.reversed,
        };
      default:
        return state;
    }
  };

