import ConnectedColors from './Colors';
import * as colorsActions from './state/actions';
import * as colorsTypes from './state/types';

export * from './state/reducer';
export const actions = colorsActions;
export const types = colorsTypes;

export { Colors } from './Colors';
export default ConnectedColors;

