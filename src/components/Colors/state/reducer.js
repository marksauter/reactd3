import * as types from './actionTypes';

export const initColors = {
  reversed: false,
};

export const colors = (state = {}, action = {}) => {
  switch (action.type) {
    case types.REVERSE_SWATCHES:
      return {
        ...state,
        reversed: !state.reversed,
      };
    default:
      return state;
  }
}

