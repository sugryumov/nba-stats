import { createSelector } from 'reselect';
import { TState } from 'store/types';

export const getStats = (state: TState) => state.stats;

export const getStatsData = createSelector(
  getStats,
  ({ response }) => response,
);

export const getStatsPlayers = createSelector(
  getStats,
  ({ response: { items } }) =>
    items.find(
      ({ uid }) => uid === 'home_daily_players' || uid === 'season_players',
    )?.items,
);

export const getStatsTeams = createSelector(
  getStats,
  ({ response: { items } }) =>
    items.find(
      ({ uid }) => uid === 'home_daily_teams' || uid === 'season_teams',
    )?.items,
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
