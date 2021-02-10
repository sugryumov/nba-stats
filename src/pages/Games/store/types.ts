export type TGamesState = {
  response: TGamesResponse;
  error: string | null
  loading: boolean;
  showScore: boolean;
  changedDate: string;
};

export type TGamesResponse = {
  games: Array<TGameItem>;
};

export type TGameItem = {
  gameId: string;
  startDateEastern: string;
  startTimeEastern: string;
  startTimeUTC: string;
  endTimeUTC?: string;
  statusNum: number;
  hTeam: TTeam;
  vTeam: TTeam;
  extendedStatusNum: number;
  clock: string;
  period: TPeriod;
};

type TTeam = {
  linescore: Array<{ score: string }>;
  loss: string;
  score: string;
  seriesLoss: string;
  seriesWin: string;
  teamId: string;
  triCode: string;
  win: string;
};

type TPeriod = {
  current: number;
  type: number;
  maxRegular: number;
  isHalftime: boolean;
  isEndOfPeriod: boolean;
};
