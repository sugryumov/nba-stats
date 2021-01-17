export interface IStandings {
  response: TGetStandingsResponse;
  error: null | Error;
  loading: boolean;
  groupBy: 'standings_conference' | 'standings_division';
}

export type TGetStandingsResponse = {
  league: {
    standard: {
      conference: {
        east: Array<TTeamStandings>;
        west: Array<TTeamStandings>;
      };
      seasonStageId: null | number;
      seasonYear: null | number;
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

  // streak: string;
  // clinchedPlayoffsCode: string;
  // clinchedPlayoffsCodeV2: string;
  // divGamesBehind: string;
  // divLoss: string;
  // divWin: string;
  // isWinStreak: boolean;

  // lossPct: string;
  // lossPctV2: string;
  // streak: string;
  // teamId: string;
  // tieBreakerPts: string;
  // winPctV2: string;
  // sortKey: TSortKey;
};

type TSortKey = {
  awayWinLoss: boolean;
  confWinLoss: boolean;
  defaultOrder: boolean;
  divWinLoss: boolean;
  gamesBehind: boolean;
  homeWinLoss: boolean;
  lastTenWinLoss: boolean;
  loss: boolean;
  nickname: boolean;
  streak: boolean;
  win: boolean;
  winPct: boolean;
};

type TTeamSitesOnly = {
  teamTricode: string;
  teamName: string;
  teamNickname: string;
  streakText: string;
  // teamCode: string;
  // clinchedConference: string;
  // clinchedDivision: string;
  // clinchedPlayoffs: string;
  // teamKey: string;
};
