import { TMeta } from 'interfaces';

export interface IFetchGamesList {
  response: TGameListResponse;
  error: null | Error;
  loading: boolean;
}

export type TGameListResponse = {
  data: Array<TGameItem>;
  meta: TMeta;
};

export type TGameItem = {
  id: number;
  date: string;
  home_team: TTeam;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team_score: number;
  visitor_team: TTeam;
};

type TTeam = {
  id: number;
  name: string;
  full_name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
};
