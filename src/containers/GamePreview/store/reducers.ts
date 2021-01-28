import { combineReducers } from 'redux';
import { getGameArticleReducer } from './GameArticle/reducer';

const gamePreviewReducers = {
  getGameArticle: getGameArticleReducer,
};

export const gamePreviewReducer = combineReducers(gamePreviewReducers);
