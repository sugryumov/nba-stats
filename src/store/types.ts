import { TGamePreviewState } from 'pages/GamePreview/store/types';
import { TGamesState } from 'pages/Games/store/types';
import { TGameStatsState } from 'pages/GameStats/store/types';
import { TStandingsState } from 'pages/Standings/store/types';
import { TNewsState } from 'pages/News/store/types';
import { TStatsState } from 'pages/Stats/store/types';
import { TPlayoffState } from 'pages/Playoff/store/types';
import { TPlayerStatisticsState } from 'pages/PlayerStats/store/types';

export type TState = {
  games: TGamesState;
  gameStats: TGameStatsState;
  gamePreview: TGamePreviewState;
  standings: TStandingsState;
  news: TNewsState;
  stats: TStatsState;
  playoff: TPlayoffState;
  playerStatistics: TPlayerStatisticsState;
};
