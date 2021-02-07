import { createReducer, getType } from 'typesafe-actions';
import { changedActiveTabAction, getBoxScoreAction } from './actions';
import { IGetBoxScore } from './entities';

const initialState: IGetBoxScore = {
  response: {
    basicGameData: {},
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
  activeTab: 'box-score',
};

export const getBoxScoreReducer = createReducer(initialState, {
  [getType(getBoxScoreAction.request)]: state => ({
    ...state,
    response: {
      basicGameData: {},
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
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getBoxScoreAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),

  [getType(changedActiveTabAction)]: (state, { payload }) => ({
    ...state,
    activeTab: payload,
  }),
});
