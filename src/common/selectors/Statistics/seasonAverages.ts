import { IState } from 'interfaces';

export const getSeasonAveragesData = (state: IState) =>
  state.statistics.seasonAverages.response.data;

export const getSeasonAveragesLoading = (state: IState) =>
  state.statistics.seasonAverages.loading;

export const getSeasonAveragesError = (state: IState) =>
  state.statistics.seasonAverages.error;
