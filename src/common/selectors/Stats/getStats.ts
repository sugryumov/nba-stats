import { createSelector } from 'reselect';
import { IState } from 'interfaces';

export const getStats = (state: IState) => state.stats;

export const getStatsData = createSelector(
  getStats,
  ({ response }) => response,
);

export const getStatsLoading = createSelector(
  getStats,
  ({ loading }) => loading,
);

export const getStatsError = createSelector(getStats, ({ error }) => error);

export const getStatsGroupBy = createSelector(
  getStats,
  ({ groupBy }) => groupBy,
);
