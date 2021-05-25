type TGameStatus = {
  ppd: number;
  notStarted: number;
  live: number;
  finished: number;
};

export const GAME_STATUS = {
  ppd: 2,
  notStarted: 1,
  live: 2,
  finished: 3,
} as TGameStatus;

type TStageStatus = {
  playoff: number;
};

export const STAGE_STATUS = {
  playoff: 4,
} as TStageStatus;
