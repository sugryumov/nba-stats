import { IState } from 'interfaces';

export const getGamesListData = (state: IState) =>
  state.gamesList.response.data;

export const getGamesListLoading = (state: IState) => state.gamesList.loading;

export const getGamesListError = (state: IState) => state.gamesList.error;
