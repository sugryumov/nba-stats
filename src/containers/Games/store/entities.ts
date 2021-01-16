export interface IFetchGamesList {
  response: TGameListResponse;
  error: null | Error;
  loading: boolean;
  showScore: boolean;
  changedDate: string;
}

export type TGameListResponse = {
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
