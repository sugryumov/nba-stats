import { IGetGamesList } from 'containers/Games/store/entities';
import { IStatistics } from 'containers/PlayerStatistics/store/entities';
import { IStandings } from 'containers/Standings/store/entities';
import { IGameStats } from 'containers/GameStats/store/entities';

export interface IState {
  gamesList: IGetGamesList;
  statistics: IStatistics;
  standings: IStandings;
  gameStats: IGameStats;
}

export type TMeta = {
  current_page: number;
  next_page: null | number;
  per_page: null | number;
  total_count: null | number;
  total_pages: null | number;
};

export type TTeam = {
  id: number;
  name: string;
  full_name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
};

export type TPlayer = {
  id: number;
  first_name: string;
  last_name: string;
  height_feet: null | number;
  height_inches: null | number;
  position: string;
  weight_pounds: null | number;
  team: TTeam;
};
