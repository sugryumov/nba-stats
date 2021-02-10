import { TTabsGamePreviewValue } from 'pages/GamePreview/store/types';

type TGamePreviewTabs = {
  id: number;
  value: TTabsGamePreviewValue;
  label: string;
};

export const GAME_PREVIEW_TABS = [
  { id: 1, value: 'articles', label: 'articles' },
  { id: 2, value: 'players', label: 'players' },
] as TGamePreviewTabs[];
