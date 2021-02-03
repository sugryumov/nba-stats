import { createReducer, getType } from 'typesafe-actions';
import { getStatsAction, statsGroupByAction } from './actions';
import { IStats } from './entities';

const initialState: IStats = {
  response: {
    title: '',
    items: [],
    last_updated: '',
  },
  error: null,
  loading: false,
  groupBy: 'home_daily',
};

const getStatsReducer = createReducer(initialState, {
  [getType(getStatsAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(getStatsAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getStatsAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),

  [getType(statsGroupByAction)]: (state, { payload }) => ({
    ...state,
    groupBy: payload,
  }),
});

export const statsReducer = getStatsReducer;
