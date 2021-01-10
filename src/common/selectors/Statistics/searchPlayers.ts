import { IState } from 'interfaces';

export const getSearchPlayersData = (state: IState) =>
  state.statistics.searchPlayer.response.data;

export const getSearchPlayersLoading = (state: IState) =>
  state.statistics.searchPlayer.loading;

export const getSearchPlayersError = (state: IState) =>
  state.statistics.searchPlayer.error;

export const getChangedPlayers = (state: IState) =>
  state.statistics.searchPlayer.changedPlayer;
