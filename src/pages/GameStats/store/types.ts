export type TGameStatsState = {
  response: TGameStatsResponse;
  error: null | string;
  loading: boolean;
  activeTab: TTabsGameStatsValue;
};

export type TTabsGameStatsValue = 'box-score' | 'details';

export type TGameStatsResponse = {
  basicGameData: any;
  stats: {
    activePlayers: Array<TGameStatsActivePlayers>;
    hTeam: null | TGameStatsTeam;
    vTeam: null | TGameStatsTeam;
    leadChanges: string;
    timesTied: string;
  };
};

export type TGameStatsActivePlayers = {
  assists: string;
  blocks: string;
  defReb: string;
  dnp: string;
  fga: string;
  fgm: string;
  fgp: string;
  firstName: string;
  fta: string;
  ftm: string;
  ftp: string;
  isOnCourt: boolean;
  jersey: string;
  lastName: string;
  min: string;
  offReb: string;
  pFouls: string;
  personId: string;
  player_code: string;
  plusMinus: string;
  points: string;
  pos: string;
  position_full: string;
  steals: string;
  teamId: string;
  totReb: string;
  tpa: string;
  tpm: string;
  tpp: string;
  turnovers: string;
};

type TGameStatsTeam = {
  biggestLead: string;
  fastBreakPoints: string;
  longestRun: string;
  pointsInPaint: string;
  pointsOffTurnovers: string;
  secondChancePoints: string;
  leaders: {
    assists: TGameStatsLeader;
    points: TGameStatsLeader;
    rebounds: TGameStatsLeader;
  };
  totals: TGameStatsTotals;
};

type TGameStatsLeader = {
  players: Array<{ personId: string; firstName: string; lastName: string }>;
  value: string;
};

type TGameStatsTotals = {
  assists: string;
  blocks: string;
  defReb: string;
  fga: string;
  fgm: string;
  fgp: string;
  fta: string;
  ftm: string;
  ftp: string;
  full_timeout_remaining: string;
  min: string;
  offReb: string;
  pFouls: string;
  plusMinus: string;
  points: string;
  short_timeout_remaining: string;
  steals: string;
  team_fouls: string;
  totReb: string;
  tpa: string;
  tpm: string;
  tpp: string;
  turnovers: string;
};
