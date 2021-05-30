const ROUTE_PREF = process.env.PUBLIC_URL;

type Route = {
  ROUTE: string;
  PATH: string;
  NAME: string;
  DISPLAY_IN_MENU: boolean;
};

type Routes = {
  [key: string]: Route;
};

const ROUTES = {
  GAMES: {
    ROUTE: `${ROUTE_PREF}/`,
    PATH: `${ROUTE_PREF}/`,
    NAME: 'GAMES',
    DISPLAY_IN_MENU: true,
  },
  STANDINGS: {
    ROUTE: `${ROUTE_PREF}/standings`,
    PATH: `${ROUTE_PREF}/standings`,
    NAME: 'STANDINGS',
    DISPLAY_IN_MENU: true,
  },
  GAME_PREVIEW: {
    ROUTE: `${ROUTE_PREF}/game-preview`,
    PATH: `${ROUTE_PREF}/game-preview`,
    NAME: '',
    DISPLAY_IN_MENU: false,
  },
  GAME_STATS: {
    ROUTE: `${ROUTE_PREF}/game-stats`,
    PATH: `${ROUTE_PREF}/game-stats`,
    NAME: '',
    DISPLAY_IN_MENU: false,
  },
  // STATS: {
  //   ROUTE: `${ROUTE_PREF}/stats`,
  //   PATH: `${ROUTE_PREF}/stats`,
  //   NAME: 'STATS',
  //   DISPLAY_IN_MENU: true,
  // },
  // PLAYOFF: {
  //   ROUTE: `${ROUTE_PREF}/playoff`,
  //   PATH: `${ROUTE_PREF}/playoff`,
  //   NAME: 'PLAYOFF',
  //   DISPLAY_IN_MENU: true,
  // },
  PLAYER_STATS: {
    ROUTE: `${ROUTE_PREF}/player-stats`,
    PATH: `${ROUTE_PREF}/player-stats`,
    NAME: 'PLAYER STATS',
    DISPLAY_IN_MENU: true,
  },
} as Routes;

export { ROUTES };
