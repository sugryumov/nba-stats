import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';

export const getSearchPlayers = (state: TState) =>
  state.playerStatistics.searchPlayer;

export const getSearchPlayersData = createSelector(
  getSearchPlayers,
  ({ response: { data } }) => data,
);

export const getSelectedPlayers = createSelector(
  getSearchPlayers,
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
