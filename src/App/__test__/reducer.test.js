import { app, initialState, State } from '../';
import {
  DATA_FETCH_REQUEST,
  DataFetchRequest,
  DATA_FETCH_SUCCESS,
  DataFetchSuccess,
  DATA_FETCH_FAILURE,
  DataFetchFailure,
} from '../';

describe('reducer -- appReducer', () => {
  it('DATA_FETCH_REQUEST', () => {
    const action: DataFetchRequest = {
      type: DATA_FETCH_REQUEST,
    }
    const expected: State = {
      ...initialState,
      loading: true,
    };
    const actual = app(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('DATA_FETCH_SUCCESS', () => {
    const data = {
      someData: {},
    };
    const action: DataFetchSuccess = {
      type: DATA_FETCH_SUCCESS,
      data,
    };
    const expected: State = {
      ...initialState,
      loading: false,
      data,
    };
    const actual = app(initialState, action);
    expect(actual).toEqual(expected);
  });

  it('DATA_FETCH_FAILURE', () => {
    const error = {
      code: 'error code',
      message: 'error message',
    }
    const action: DataFetchFailure = {
      type: DATA_FETCH_FAILURE,
      error,
    };
    const expected: State = {
      ...initialState,
      loading: false,
      error,
    };
    const actual = app(initialState, action);
    expect(actual).toEqual(expected);
  });
});

