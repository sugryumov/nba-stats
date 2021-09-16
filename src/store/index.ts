import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gamesReducer from 'pages/Games/store';
import gameStatsReducer from 'pages/GameStats/store';
import gamePreviewReducer from 'pages/GamePreview/store';
import standingsReducer from 'pages/Standings/store';
import newsReducer from 'pages/News/store';
import statsReducer from 'pages/Stats/store';
import playoffReducer from 'pages/Playoff/store';
import gamePlayerStatisticsReducer from 'pages/PlayerStats/store';

export const rootReducer = combineReducers({
  games: gamesReducer,
  gameStats: gameStatsReducer,
  gamePreview: gamePreviewReducer,
  standings: standingsReducer,
  news: newsReducer,
  stats: statsReducer,
  playoff: playoffReducer,
  playerStatistics: gamePlayerStatisticsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
