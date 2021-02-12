import { combineReducers } from '@reduxjs/toolkit';
import searchPlayerReducer from './SearchPlayer';
import seasonAveragesReducer from './SeasonAverages';
import playerStatsReducer from './PlayerStats';

const gamePlayerStatisticsReducer = combineReducers({
  searchPlayer: searchPlayerReducer,
  seasonAverages: seasonAveragesReducer,
  playerStats: playerStatsReducer,
});

export default gamePlayerStatisticsReducer;
