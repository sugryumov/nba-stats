import { IFetchGamesList } from 'containers/GameList/store/entities';
import { IStatistics } from 'containers/PlayerStatistics/store/entities';

export interface IState {
  gamesList: IFetchGamesList;
  statistics: IStatistics;
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
  height_feet: null | string;
  height_inches: null | string;
  position: string;
  weight_pounds: null | string;
  team: TTeam;
};
