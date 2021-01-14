import { Paths as P } from 'enums/routes';
import GameListContainer from 'containers/Games';
import PlayerStatisticContainer from 'containers/PlayerStatistics';

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
];
