import { TTabsGameStatsValue } from 'containers/GameStats/store/BoxScore/entities';

type TTabsGameStats = {
  id: number;
  value: TTabsGameStatsValue;
  label: string;
};

export const tabsGameStats: TTabsGameStats[] = [
  { id: 1, value: 'box-score', label: 'box score' },
  { id: 2, value: 'details', label: 'game details' },
];
