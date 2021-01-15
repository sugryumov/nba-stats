export interface ISvgIcon {
  name?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  fill?: string;
}

export interface ISvgProps {
  fill?: string | any;
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeChildren?: string;
}

export enum nbaTeam {
  ATL = 'ATL',
  BKN = 'BKN',
  BOS = 'BOS',
  CHA = 'CHA',
  CHI = 'CHI',
  CLE = 'CLE',
  DAL = 'DAL',
  DEN = 'DEN',
  DET = 'DET',
  GSW = 'GSW',
  HOU = 'HOU',
  IND = 'IND',
  LAC = 'LAC',
  LAL = 'LAL',
  MEM = 'MEM',
  MIA = 'MIA',
  MIL = 'MIL',
  MIN = 'MIN',
  NOP = 'NOP',
  NYK = 'NYK',
  OKC = 'OKC',
  ORL = 'ORL',
  PHI = 'PHI',
  PHX = 'PHX',
  POR = 'POR',
  SAC = 'SAC',
  SAS = 'SAS',
  TOR = 'TOR',
  UTA = 'UTA',
  WAS = 'WAS',
  NBA = 'NBA',
}
