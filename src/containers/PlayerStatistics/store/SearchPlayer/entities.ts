import { TMeta, TPlayer } from 'interfaces';

export interface ISearchPlayer {
  response: TSearchPlayerResponse;
  error: null | Error;
  loading: boolean;
  selectedPlayer: Array<TPlayer>;
}

export type TSearchPlayerResponse = {
  data: Array<TPlayer>;
  meta: TMeta;
};

export type TSearchPlayerRequest = {
  search: string;
};
