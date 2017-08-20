
import { all } from 'redux-saga/effects';
import reactd3 from 'scenes/ReactD3/sagas';

export default function* rootSaga() {
  yield all([
    reactd3(),
  ]);
}
