import { TTabsGameStatsValue } from 'pages/GameStats/store/types';

type TGameStatsTabs = {
  id: number;
  value: TTabsGameStatsValue;
  label: string;
};

export const GAME_STATS_TABS = [
  { id: 1, value: 'box-score', label: 'box score' },
  { id: 2, value: 'details', label: 'game details' },
] as TGameStatsTabs[];
