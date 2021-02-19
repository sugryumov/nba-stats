import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';
import { TScheduleTeamGame } from 'pages/Standings/store/ScheduleTeam/types';

export const getScheduleTeam = (state: TState) => state.standings.scheduleTeam;

export const getScheduleTeamData = createSelector(
  getScheduleTeam,
  ({
    response: {
      league: { standard },
    },
  }): Array<TScheduleTeamGame> =>
    standard.map(({ ...rest }) => ({
      ...rest,
    })),
);

export const getScheduleTeamLoading = createSelector(
  getScheduleTeam,
  ({ loading }) => loading,
);

export const getScheduleTeamError = createSelector(
  getScheduleTeam,
  ({ error }) => error,
);
