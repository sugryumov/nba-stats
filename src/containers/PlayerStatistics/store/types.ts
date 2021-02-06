import { TSearchPlayerState } from './SearchPlayer/types';
import { TSeasonAveragesState } from './SeasonAverages/types';

export type TPlayerStatisticsState = {
  searchPlayer: TSearchPlayerState;
  seasonAverages: TSeasonAveragesState;
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

export type TTeam = {
  id: number;
  name: string;
  full_name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
};

export type TMeta = {
  current_page: number;
  next_page: null | number;
  per_page: null | number;
  total_count: null | number;
  total_pages: null | number;
};
