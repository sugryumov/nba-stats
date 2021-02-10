import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';
import { TPreviewArticlesResponse } from 'pages/GamePreview/store/PreviewArticles/types';

export const previewArticles = (state: TState) =>
  state.gamePreview.previewArticles;

export const getPreviewArticlesList = createSelector(
  previewArticles,
  ({
    response: { title, paragraphs, pubDateUTC },
  }): TPreviewArticlesResponse => {
    return { title, paragraphs, pubDateUTC };
  },
);

export const getPreviewArticlesLoading = createSelector(
  previewArticles,
  ({ loading }) => loading,
);

export const getPreviewArticlesError = createSelector(
  previewArticles,
  ({ error }) => error,
);
