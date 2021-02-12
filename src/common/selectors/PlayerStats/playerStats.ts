import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';

export const getPlayerStats = (state: TState) =>
  state.playerStatistics.playerStats;

export const getPlayerStatsData = createSelector(
  getPlayerStats,
  ({ response: { data } }) => data,
);

export const getPlayerStatsLoading = createSelector(
  getPlayerStats,
  ({ loading }) => loading,
);

export const getPlayerStatsError = createSelector(
  getPlayerStats,
  ({ error }) => error,
);
