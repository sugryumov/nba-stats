import { createSelector } from '@reduxjs/toolkit';
// import { playerStats } from 'helpers/fakeData';
import { TState } from 'store/types';

export const getSearchPlayers = (state: TState) =>
  state.playerStatistics.searchPlayer;

export const getSearchPlayersData = createSelector(
  getSearchPlayers,
  ({ response: { data } }) => data,
);

export const getSelectedPlayers = createSelector(
  getSearchPlayers,
  // ({ selectedPlayer }) => [...playerStats, ...selectedPlayer],
  ({ selectedPlayer }) => selectedPlayer,
);

export const getSearchPlayersLoading = createSelector(
  getSearchPlayers,
  ({ loading }) => loading,
);

export const getSearchPlayersError = createSelector(
  getSearchPlayers,
  ({ error }) => error,
);
