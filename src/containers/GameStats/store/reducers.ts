import { combineReducers } from 'redux';
import { getBoxScoreReducer } from './BoxScore/reducer';

const gameStatsReducers = {
  getBoxScore: getBoxScoreReducer,
};

export const gameStatsReducer = combineReducers(gameStatsReducers);
