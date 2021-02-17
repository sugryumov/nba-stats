type TGroupByStandings = {
  id: number;
  name: string;
  value: string;
};

export const GROUP_BY_STANDINGS = [
  { id: 1, name: 'Conference', value: 'standings_conference' },
  { id: 2, name: 'Division', value: 'standings_division' },
  { id: 3, name: 'All Teams', value: 'standings_all' },
] as TGroupByStandings[];
