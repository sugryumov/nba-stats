import { combineReducers } from 'redux';
import { getPreviewArticlesReducer } from './PreviewArticles/reducer';
import { getPlayersPerGameReducer } from './PlayersPerGame/reducer';

const gamePreviewReducers = {
  previewArticles: getPreviewArticlesReducer,
  playersPerGame: getPlayersPerGameReducer,
};

export const gamePreviewReducer = combineReducers(gamePreviewReducers);
