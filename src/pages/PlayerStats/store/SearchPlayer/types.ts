import { TMeta, TPlayer } from '../types';

export type TSearchPlayerState = {
  response: TSearchPlayerResponse;
  error: null | string;
  loading: boolean;
  selectedPlayer: Array<TPlayer>;
};

export type TSearchPlayerResponse = {
  data: Array<TPlayer>;
  meta: TMeta;
};

export type TSearchPlayerRequest = {
  search: string;
};
