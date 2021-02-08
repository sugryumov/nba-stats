type TGroupByLeaders = {
  id: number;
  name: string;
  value: string;
};

export const GROUP_BY_LEADERS = [
  { id: 1, name: 'Daily Leaders', value: 'home_daily' },
  { id: 2, name: 'Season Leaders', value: 'home_season' },
] as TGroupByLeaders[];
