import { combineReducers } from '@reduxjs/toolkit';
import gamesReducer from 'containers/Games/store';
import gameStatsReducer from 'containers/GameStats/store';
import gamePreviewReducer from 'containers/GamePreview/store';
import standingsReducer from 'containers/Standings/store';
import statsReducer from 'containers/Stats/store';

export const rootReducer = combineReducers({
  games: gamesReducer,
  gameStats: gameStatsReducer,
  gamePreview: gamePreviewReducer,
  standings: standingsReducer,
  stats: statsReducer,
});
