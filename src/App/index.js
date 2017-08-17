import App from './App';
import * as appActions from './state/actions';
import * as appTypes from './state/types';

export * from './state/reducer';
export const actions = appActions;
export const types = appTypes;

export default App;

