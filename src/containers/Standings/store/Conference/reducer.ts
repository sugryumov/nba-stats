import { createReducer, getType } from 'typesafe-actions';
import { confStandingsAction } from './actions';
import { IConfStandings } from './entities';

const initialState: IConfStandings = {
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
};

export const confStandingsReducer = createReducer(initialState, {
  [getType(confStandingsAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(confStandingsAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(confStandingsAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
