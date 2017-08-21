import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../services/api';
import * as types from './types';

function* fetchData(action) {
  try {
    const data = yield call(api.loadAllData);
    yield put({ type: types.DATA_FETCH_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.DATA_FETCH_FAILURE, error });  
  }
}

function* saga() {
  yield takeLatest(types.DATA_FETCH_REQUEST, fetchData);
}

export default saga;

