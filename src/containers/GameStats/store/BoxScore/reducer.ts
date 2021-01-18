import { createReducer, getType } from 'typesafe-actions';
import { getBoxScoreAction } from './actions';
import { IGetBoxScore } from './entities';

const initialState: IGetBoxScore = {
  response: {
    stats: {
      activePlayers: [],
      hTeam: null,
      vTeam: null,
      leadChanges: '',
      timesTied: '',
    },
  },
  error: null,
  loading: false,
};

export const getBoxScoreReducer = createReducer(initialState, {
  [getType(getBoxScoreAction.request)]: state => ({
    ...state,
    response: {
      stats: {
        activePlayers: [],
        hTeam: null,
        vTeam: null,
        leadChanges: '',
        timesTied: '',
      },
    },
    error: null,
    loading: true,
  }),
  [getType(getBoxScoreAction.success)]: (state, { payload }) => ({
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getBoxScoreAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
