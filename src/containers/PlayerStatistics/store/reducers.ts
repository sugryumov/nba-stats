import { combineReducers } from 'redux';
import { searchPlayerReducer } from './SearchPlayer/reducer';
import { seasonAveragesReducer } from './SeasonAverages/reducer';

const statisticsReducers = {
  searchPlayer: searchPlayerReducer,
  seasonAverages: seasonAveragesReducer,
};

export const statisticsReducer = combineReducers(statisticsReducers);
