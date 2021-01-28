import { Paths as P } from 'enums/routes';
import GameListContainer from 'containers/Games';
import PlayerStatisticContainer from 'containers/PlayerStatistics';
import StandingsContainer from 'containers/Standings';
import GameStatsContainer from 'containers/GameStats';
import GamePreviewContainer from 'containers/GamePreview';

export const pages = [
  {
    component: GameListContainer,
    path: P.games,
    exact: true,
  },
  {
    component: PlayerStatisticContainer,
    path: P.playerStatistic,
    exact: true,
  },
  {
    component: StandingsContainer,
    path: P.standings,
    exact: true,
  },
  {
    component: GameStatsContainer,
    path: P.gameStats,
    exact: true,
  },
  {
    component: GamePreviewContainer,
    path: P.gamePreview,
    exact: true,
  },
];
