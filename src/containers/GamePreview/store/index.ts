import { combineReducers } from '@reduxjs/toolkit';
import previewArticlesReducer from './PreviewArticles';
import playersPerGameReducer from './PlayersPerGame';

export const gamePreviewReducer = combineReducers({
  previewArticles: previewArticlesReducer,
  playersPerGame: playersPerGameReducer,
});
