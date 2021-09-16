import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';

export const getNews = (state: TState) => state.news;

export const getNewsData = createSelector(
  getNews,
  ({ response: { ListItems } }) => ListItems,
);

export const getNewsLoading = createSelector(getNews, ({ loading }) => loading);

export const getNewsError = createSelector(getNews, ({ error }) => error);
