import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';

export const getStandingsTeam = (state: TState) =>
  state.standings.standingsTeam;

export const getAllStandingsTeamData = createSelector(
  getStandingsTeam,
  ({
    response: {
      league: {
        standard: { teams },
      },
    },
  }) =>
    teams?.map(team => ({
      ...team,
      teamName: team.teamSitesOnly.teamName,
      teamNickname: team.teamSitesOnly.teamNickname,
      teamTricode: team.teamSitesOnly.teamTricode,
      streakText: team.teamSitesOnly.streakText,
      rank: team.sortKey.defaultOrder,
    })),
);

export const getStandingsTeamData = createSelector(
  getStandingsTeam,
  ({
    response: {
      league: {
        standard: { conference },
      },
    },
  }) => {
    const divisionGroup = division => {
      return Object.entries(division).reduce(
        (acc, [div, teams]: [string, any]) => {
          const result = {
            ...acc,
            [div]: teams.map(team => {
              return {
                ...team,
                teamName: team.teamSitesOnly.teamName,
                teamNickname: team.teamSitesOnly.teamNickname,
                teamTricode: team.teamSitesOnly.teamTricode,
                streakText: team.teamSitesOnly.streakText,
              };
            }),
          };

          return result;
        },
        {},
      );
    };

    const conferenceGroup = conference => {
      return conference.map(team => {
        return {
          ...team,
          teamName: team.teamSitesOnly.teamName,
          teamNickname: team.teamSitesOnly.teamNickname,
          teamTricode: team.teamSitesOnly.teamTricode,
          streakText: team.teamSitesOnly.streakText,
        };
      });
    };

    if (Array.isArray(conference?.east)) {
      return {
        east: conferenceGroup(conference?.east),
        west: conferenceGroup(conference?.west),
      };
    } else if (conference) {
      return {
        east: divisionGroup(conference?.east),
        west: divisionGroup(conference?.west),
      };
    }
  },
);

export const getStandingsTeamLoading = createSelector(
  getStandingsTeam,
  ({ loading }) => loading,
);

export const getStandingsTeamError = createSelector(
  getStandingsTeam,
  ({ error }) => error,
);

export const getStandingsTeamGroupBy = createSelector(
  getStandingsTeam,
  ({ groupBy }) => groupBy,
);
