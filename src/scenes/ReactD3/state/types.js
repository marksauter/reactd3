// @flow

export const DATA_FETCH_REQUEST = 'DATA_FETCH_REQUEST';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

export type DataFetchRequest = { type: 'DATA_FETCH_REQUEST' };
export type DataFetchSuccess = { type: 'DATA_FETCH_SUCCESS', data: Object }
export type DataFetchFailure = { type: 'DATA_FETCH_FAILURE', error: Object }

export type Action =
  | DataFetchRequest
  | DataFetchSuccess
  | DataFetchFailure;

