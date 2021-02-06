import { TTabsGamePreviewValue } from 'containers/GamePreview/store/types';

type TTabsGamePreview = {
  id: number;
  value: TTabsGamePreviewValue;
  label: string;
};

export const tabsGamePreview: TTabsGamePreview[] = [
  { id: 1, value: 'articles', label: 'articles' },
  { id: 2, value: 'players', label: 'players' },
];
