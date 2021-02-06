import { combineReducers } from '@reduxjs/toolkit';
import gamesReducer from 'containers/Games/store';
import gameStatsReducer from 'containers/GameStats/store';
import { gamePreviewReducer } from 'containers/GamePreview/store';

export const rootReducer = combineReducers({
  games: gamesReducer,
  gameStats: gameStatsReducer,
  gamePreview: gamePreviewReducer,
});
