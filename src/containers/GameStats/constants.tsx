import React, { ReactNode } from 'react';
import BoxScore from 'containers/GameStats/components/TabsContent/BoxScore';
import GameDetails from 'containers/GameStats/components/TabsContent/GameDetails';
import { TTabsGameStatsValue } from 'containers/GameStats/store/BoxScore/entities';

type TTabsGameStats = {
  id: number;
  value: TTabsGameStatsValue;
  label: string;
  Component: ReactNode;
};

export const tabsGameStats: TTabsGameStats[] = [
  { id: 1, value: 'box-score', label: 'box score', Component: <BoxScore /> },
  {
    id: 2,
    value: 'details',
    label: 'game details',
    Component: <GameDetails />,
  },
];
