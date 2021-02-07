import { createReducer, getType } from 'typesafe-actions';
import { seasonAveragesAction } from './actions';
import { ISeasonAverages } from './entities';

const initialState: ISeasonAverages = {
  response: { data: [] },
  error: null,
  loading: false,
};

export const seasonAveragesReducer = createReducer(initialState, {
  [getType(seasonAveragesAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(seasonAveragesAction.success)]: (state, { payload }) => ({
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(seasonAveragesAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
