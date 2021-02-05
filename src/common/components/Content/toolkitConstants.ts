import { Paths as P } from 'enums/routes';
import GameListContainer from 'containers/GamesToolkit';

export const pages = [
  {
    component: GameListContainer,
    path: P.games,
    exact: true,
  },
];
