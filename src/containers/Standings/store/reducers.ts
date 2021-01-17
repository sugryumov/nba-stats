import { createReducer, getType } from 'typesafe-actions';
import { getStandingsAction, standingsGroupByAction } from './actions';
import { IStandings } from './entities';

const initialState: IStandings = {
  response: {
    league: {
      standard: {
        conference: {
          east: [],
          west: [],
        },
        seasonStageId: null,
        seasonYear: null,
      },
    },
  },
  error: null,
  loading: false,
  groupBy: 'standings_conference',
};

const getStandingsReducer = createReducer(initialState, {
  [getType(getStandingsAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(getStandingsAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getStandingsAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),

  [getType(standingsGroupByAction)]: (state, { payload }) => ({
    ...state,
    groupBy: payload,
  }),
});

export const standingsReducer = getStandingsReducer;
