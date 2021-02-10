import { combineReducers } from '@reduxjs/toolkit';
import gamesReducer from 'pages/Games/store';
import gameStatsReducer from 'pages/GameStats/store';
import gamePreviewReducer from 'pages/GamePreview/store';
import standingsReducer from 'pages/Standings/store';
import statsReducer from 'pages/Stats/store';
import gamePlayerStatisticsReducer from 'pages/PlayerStats/store';

export const rootReducer = combineReducers({
  games: gamesReducer,
  gameStats: gameStatsReducer,
  gamePreview: gamePreviewReducer,
  standings: standingsReducer,
  stats: statsReducer,
  playerStatistics: gamePlayerStatisticsReducer,
});
