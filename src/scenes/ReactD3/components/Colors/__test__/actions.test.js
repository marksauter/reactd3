import { reverseSwatches } from '../';
import { REVERSE_SWATCHES } from '../';

describe('action --- colorsActions', () => {
  it('reverseSwatches', () => {
    const expected = { type: REVERSE_SWATCHES }
    const actual = reverseSwatches();
    expect(actual).toEqual(expected);
  });
});

