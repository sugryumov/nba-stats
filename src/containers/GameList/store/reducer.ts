import { createReducer, getType } from 'typesafe-actions';
import { fetchGamesListAction } from './actions';
import { IFetchGamesList } from './entities';

const initialState: IFetchGamesList = {
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

export const fetchGamesListReducer = createReducer(initialState, {
  [getType(fetchGamesListAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(fetchGamesListAction.success)]: (state, { payload }) => ({
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(fetchGamesListAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
