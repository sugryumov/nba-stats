import { createReducer, getType } from 'typesafe-actions';
import { searchPlayerAction } from './actions';
import { ISearchPlayer } from './entities';

const initialState: ISearchPlayer = {
  response: {
    data: [],
    meta: {
      current_page: 1,
      next_page: null,
      per_page: null,
      total_count: null,
      total_pages: null,
    },
  },
  error: null,
  loading: false,
};

export const searchPlayerReducer = createReducer(initialState, {
  [getType(searchPlayerAction.request)]: state => ({
    ...state,
    response: {
      data: [],
      meta: {
        current_page: 1,
        next_page: null,
        per_page: null,
        total_count: null,
        total_pages: null,
      },
    },
    error: null,
    loading: true,
  }),
  [getType(searchPlayerAction.success)]: (state, { payload }) => ({
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(searchPlayerAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
