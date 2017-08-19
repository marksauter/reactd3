import { colors } from '../';
import { REVERSE_SWATCHES } from '../';

describe('reducer -- colorsReducer', () => {
  it('REVERSE_SWATCHES', () => {
    const initialState = {
      reversed: false,
    };
    const action = {
      type: REVERSE_SWATCHES,
    }
    const expected = {
      reversed: true,
    };
    const actual = colors(initialState, action);
    expect(actual).toEqual(expected);
  });
});

