import { createReducer, getType } from 'typesafe-actions';
import { getGameArticleAction } from './actions';
import { IGetGameArticle } from './entities';

const initialState: IGetGameArticle = {
  response: {
    paragraphs: [],
    pubDateUTC: '',
    title: '',
  },
  error: null,
  loading: false,
};

export const getGameArticleReducer = createReducer(initialState, {
  [getType(getGameArticleAction.request)]: state => ({
    ...state,
    response: {
      paragraphs: [],
      pubDateUTC: '',
      title: '',
    },
    error: null,
    loading: true,
  }),
  [getType(getGameArticleAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getGameArticleAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});
