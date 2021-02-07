export interface ISeasonAverages {
  response: {
    data: TSeasonAveragesResponse[];
  };
  error: null | Error;
  loading: boolean;
}

export type TSeasonAveragesResponse = {
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  games_played: number;
  min: string;
  oreb: number;
  pf: number;
  player_id: number;
  pts: number;
  reb: number;
  season: number;
  stl: number;
  turnover: number;
};

export type TSeasonAveragesRequest = {
  player_ids: number[];
  season?: string;
};
