import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { TGetPreviewArticlesResponse } from 'pages/GamePreview/store/PreviewArticles/entities';

export const previewArticles = (state: IState) =>
  state.gamePreview.previewArticles;

export const getPreviewArticlesList = createSelector(
  previewArticles,
  ({
    response: { title, paragraphs, pubDateUTC },
  }): TGetPreviewArticlesResponse => {
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
