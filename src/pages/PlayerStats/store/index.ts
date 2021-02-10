import { combineReducers } from '@reduxjs/toolkit';
import searchPlayerReducer from './SearchPlayer';
import SeasonAveragesReducer from './SeasonAverages';

const gamePlayerStatisticsReducer = combineReducers({
  searchPlayer: searchPlayerReducer,
  seasonAverages: SeasonAveragesReducer,
});

export default gamePlayerStatisticsReducer;
