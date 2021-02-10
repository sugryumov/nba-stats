export type TPlayersPerGameState = {
  response: TPlayersPerGameResponse;
  error: null | string;
  loading: boolean;
};

export type TPlayersPerGameResponse = {
  sports_content: {
    game: TPerGame;
  };
};

type TPerGame = {
  date: string;
  gameId: string;
  home: null | TPerGameTeam;
  visitor: null | TPerGameTeam;
};

type TPerGameTeam = {
  id: string;
  name: string;
  players: {
    player: TPerGamePlayers[];
  };
};

type TPerGamePlayers = {
  assists_pg: string;
  field_goal_pct: string;
  free_throw_pct: string;
  games: string;
  last_name: string;
  person_id: string;
  points_pg: string;
  rebounds_pg: string;
  steals_pg: string;
  three_point_pct: string;
  turnovers_pg: string;
};
