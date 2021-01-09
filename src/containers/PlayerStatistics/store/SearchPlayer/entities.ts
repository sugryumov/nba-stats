import { TMeta, TPlayer } from 'interfaces';

export interface ISearchPlayer {
  response: TSearchPlayerResponse;
  error: null | Error;
  loading: boolean;
}

export type TSearchPlayerResponse = {
  data: Array<TPlayer>;
  meta: TMeta;
};
