export type TScheduleTeamState = {
  response: TScheduleTeamResponse;
  error: null | string;
  loading: boolean;
};

export type TScheduleTeamResponse = {
  league: {
    standard: {
      conference: Array<TScheduleTeamGame>;
    };
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
  startTimeEastern: string;
  startTimeUTC: string;
  statusNum: number;
  extendedStatusNum: number;
};
