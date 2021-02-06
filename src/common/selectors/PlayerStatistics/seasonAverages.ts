import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';

export const getSeasonAverages = (state: TState) =>
  state.playerStatistics.seasonAverages;

export const getSeasonAveragesData = createSelector(
  getSeasonAverages,
  ({ response: { data } }) => data,
);

export const getSeasonAveragesLoading = createSelector(
  getSeasonAverages,
  ({ loading }) => loading,
);

export const getSeasonAveragesError = createSelector(
  getSeasonAverages,
  ({ error }) => error,
);
