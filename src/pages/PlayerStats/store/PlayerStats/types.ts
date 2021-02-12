import { TMeta } from '../types';

export type TPlayerStatsState = {
  response: TPlayerStatsResponse;
  error: null | string;
  loading: boolean;
};

export type TPlayerStatsResponse = {
  data: any;
  meta: TMeta;
};

export type TPlayerStatsRequest = {
  player_ids: number[];
  seasons?: number[];
  per_page?: number;
};
