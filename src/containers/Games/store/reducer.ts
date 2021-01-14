import { createReducer, getType } from 'typesafe-actions';
import { fetchGamesListAction, showScoreGameAction } from './actions';
import { IFetchGamesList } from './entities';

const initialState: IFetchGamesList = {
  response: {
    games: [],
  },
  error: null,
  loading: false,
  showScore: false,
};

export const fetchGamesListReducer = createReducer(initialState, {
  [getType(fetchGamesListAction.request)]: state => ({
    ...state,
    response: {
      games: [],
    },
    error: null,
    loading: true,
  }),
  [getType(fetchGamesListAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(fetchGamesListAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),

  [getType(showScoreGameAction)]: (state, { payload }) => ({
    ...state,
    showScore: payload,
  }),
});
