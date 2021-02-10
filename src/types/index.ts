export type TGetDataRequest = {
  gameDate: string;
  gameId: string;
};

export type TColumns = {
  id: number;
  component: any;
  name: string;
  render?: string[];
  label: string;
  colSpan?: {
    count: number;
    columnName: string;
  };
  styles?: any;
  tooltip?: string;
};
