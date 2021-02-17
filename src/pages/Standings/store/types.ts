export type TStandingsState = {
  response: TStandingsResponse;
  error: null | string;
  loading: boolean;
  groupBy: TStandingsGroupBy;
};

export type TStandingsGroupBy =
  | 'standings_conference'
  | 'standings_division'
  | 'standings_all';

export type TStandingsResponse = {
  league: {
    standard: {
      conference?: {
        east: Array<TTeamStandings>;
        west: Array<TTeamStandings>;
      };
      seasonStageId?: null | number;
      seasonYear?: null | number;
      teams?: Array<TTeamStandings>;
    };
  };
};

export type TTeamStandings = {
  teamId: string;
  confRank: string;
  teamSitesOnly: TTeamSitesOnly;
  win: string;
  loss: string;
  winPct: string;
  gamesBehind: string;
  confWin: string;
  confLoss: string;
  homeWin: string;
  homeLoss: string;
  awayWin: string;
  awayLoss: string;
  lastTenLoss: string;
  lastTenWin: string;
  divRank: string;
  sortKey: {
    defaultOrder: number;
  };
};

type TTeamSitesOnly = {
  teamTricode: string;
  teamName: string;
  teamNickname: string;
  streakText: string;
};
