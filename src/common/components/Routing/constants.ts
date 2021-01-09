import { Paths as P } from 'enums/routes';
import Home from 'containers/Home';
import GameListContainer from 'containers/GameList';
import PlayerStatisticContainer from 'containers/PlayerStatistics';

export const pages = [
  {
    component: Home,
    path: P.home,
    exact: true,
  },
  {
    component: GameListContainer,
    path: P.games,
  },
  {
    component: PlayerStatisticContainer,
    path: P.playerStatistic,
  },
];
