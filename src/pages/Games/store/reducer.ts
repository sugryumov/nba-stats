import { parseDateFromYMD } from 'helpers/parse';
import { createReducer, getType } from 'typesafe-actions';
import {
  changedGameDateAction,
  getGamesListAction,
  showScoreGameAction,
} from './actions';
import { IGetGamesList } from './entities';

const initialState: IGetGamesList = {
  response: {
    games: [],
  },
  error: null,
  loading: false,
  showScore: false,
  changedDate: parseDateFromYMD(),
};

export const getGamesListReducer = createReducer(initialState, {
  [getType(getGamesListAction.request)]: state => ({
    ...state,
    response: {
      games: [],
    },
    error: null,
    loading: true,
  }),
  [getType(getGamesListAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getGamesListAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),

  [getType(showScoreGameAction)]: (state, { payload }) => ({
    ...state,
    showScore: payload,
  }),

  [getType(changedGameDateAction)]: (state, { payload }) => ({
    ...state,
    changedDate: payload,
  }),
});
