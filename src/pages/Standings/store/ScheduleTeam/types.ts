export type TScheduleTeamState = {
  response: TScheduleTeamResponse;
  error: null | string;
  loading: boolean;
};

export type TScheduleTeamResponse = {
  league: {
    standard: Array<TScheduleTeamGame>;
  };
};

export type TScheduleTeamGame = {
  hTeam: {
    teamId: string;
    score: string;
  };
  vTeam: {
    teamId: string;
    score: string;
  };
  startDateEastern: string;
  statusNum: number;
  extendedStatusNum: number;
  gameId: string;
  gameUrlCode: string;
};
