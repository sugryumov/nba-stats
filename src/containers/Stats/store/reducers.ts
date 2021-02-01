import { createReducer, getType } from 'typesafe-actions';
import { getStatsAction } from './actions';
import { IStats } from './entities';

const initialState: IStats = {
  response: {
    title: '',
    items: [],
  },
  error: null,
  loading: false,
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
});

export const statsReducer = getStatsReducer;
