type TGroupByStandings = {
  id: number;
  name: string;
  value: string;
};

export const GROUP_BY_STANDINGS = [
  { id: 1, name: 'Conference', value: 'standings_conference' },
  { id: 2, name: 'Division', value: 'standings_division' },
] as TGroupByStandings[];
