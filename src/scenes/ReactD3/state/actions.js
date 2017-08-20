import * as types from './types';

export const getData = (): types.DataFetchRequest => ({
  type: types.DATA_FETCH_REQUEST,
});

