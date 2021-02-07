import { createReducer, getType } from 'typesafe-actions';
import {
  clearPreviewArticlesAction,
  getPreviewArticlesAction,
} from './actions';
import { IGetPreviewArticles } from './entities';

const initialState: IGetPreviewArticles = {
  response: {
    paragraphs: [],
    pubDateUTC: '',
    title: '',
  },
  error: null,
  loading: false,
};

export const getPreviewArticlesReducer = createReducer(initialState, {
  [getType(getPreviewArticlesAction.request)]: state => ({
    ...state,
    response: {
      paragraphs: [],
      pubDateUTC: '',
      title: '',
    },
    error: null,
    loading: true,
  }),
  [getType(getPreviewArticlesAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getPreviewArticlesAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),

  [getType(clearPreviewArticlesAction)]: state => ({
    ...state,
    response: {
      paragraphs: [],
      pubDateUTC: '',
      title: '',
    },
  }),
});
