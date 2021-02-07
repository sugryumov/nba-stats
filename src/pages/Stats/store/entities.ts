export interface IStats {
  response: TGetStatsResponse;
  error: null | Error;
  loading: boolean;
  groupBy: 'home_daily' | 'home_season';
}

export type TGetStatsResponse = {
  title: string;
  items: Array<TSeasonLeadersPlayers>;
  last_updated: string;
};

type TSeasonLeadersPlayers = {
  uid: string;
  title: string;
  count: number;
  items: Array<TPlayerStatsItem>;
};

type TPlayerStatsItem = {
  title: string;
  name: string;
  timestamp: string;
  season: string;
  seasontype: string;
  permode: string;
  playerstats: TPlayerStats;
};

type TPlayerStats = {
  RANK: number;
  PLAYER_ID: number;
  PLAYER_NAME: string;
  TEAM_ID: number;
  TEAM_ABBREVIATION: string;
  PTS: number;
};
