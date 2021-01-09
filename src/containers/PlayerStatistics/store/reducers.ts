import { combineReducers } from 'redux';
import { searchPlayerReducer } from './SearchPlayer/reducer';

const statisticsReducers = {
  searchPlayer: searchPlayerReducer,
};

export const statisticsReducer = combineReducers(statisticsReducers);
