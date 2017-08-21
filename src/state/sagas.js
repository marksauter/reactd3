// @flow

import { all } from 'redux-saga/effects';

import { saga as reactd3 } from 'scenes/ReactD3';

export default function* rootSaga(): any {
  yield all([
    reactd3,
  ]);
}
