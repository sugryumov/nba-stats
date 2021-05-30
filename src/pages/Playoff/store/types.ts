export type TPlayoffState = {
  response: TPlayoffResponse;
  error: string | null;
  loading: boolean;
};

export type TPlayoffResponse = {
  bracket: {
    playoffBracketSeries: Array<TPlayoffPair>;
  };
};

type TPlayoffPair = {
  displayBottomTeam: number;
  displayOrderNumber: number;
  displayTopTeam: number;
  highSeedCity: string;
  highSeedId: number;
  highSeedName: string;
  highSeedRank: number;
  highSeedRegSeasonLosses: number;
  highSeedRegSeasonWins: number;
  highSeedSeriesWins: number;
  highSeedTricode: string;
  lowSeedCity: string;
  lowSeedId: number;
  lowSeedName: string;
  lowSeedRank: number;
  lowSeedRegSeasonLosses: number;
  lowSeedRegSeasonWins: number;
  lowSeedSeriesWins: number;
  lowSeedTricode: string;
  nextGameDateTimeEt: string;
  nextGameDateTimeUTC: string;
  nextGameId: string;
  nextGameNumber: string;
  nextGameStatus: number;
  nextGameStatusText: string;
  roundNumber: number;
  seriesConference: string;
  seriesId: string;
  seriesNumber: number;
  seriesStatus: number;
  seriesText: string;
  seriesWinner: number;
};
