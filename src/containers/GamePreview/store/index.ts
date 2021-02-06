import { combineReducers } from '@reduxjs/toolkit';
import previewArticlesReducer from './PreviewArticles';
import playersPerGameReducer from './PlayersPerGame';

const gamePreviewReducer = combineReducers({
  previewArticles: previewArticlesReducer,
  playersPerGame: playersPerGameReducer,
});

export default gamePreviewReducer;
