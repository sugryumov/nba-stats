import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { TGetGameArticleResponse } from 'containers/GamePreview/store/GameArticle/entities';

export const getGamePreview = (state: IState) =>
  state.gamePreview.getGameArticle;

export const getGetArticleList = createSelector(
  getGamePreview,
  ({
    response: { title, paragraphs, pubDateUTC },
  }): TGetGameArticleResponse => {
    return { title, paragraphs, pubDateUTC };
  },
);

export const getGetArticleLoading = createSelector(
  getGamePreview,
  ({ loading }) => loading,
);

export const getGetArticleError = createSelector(
  getGamePreview,
  ({ error }) => error,
);
