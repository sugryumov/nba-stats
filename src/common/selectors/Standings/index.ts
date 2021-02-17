import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';

export const getStandings = (state: TState) => state.standings;

export const getAllStandingsData = createSelector(
  getStandings,
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

export const getStandingsData = createSelector(
  getStandings,
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

export const getStandingsLoading = createSelector(
  getStandings,
  ({ loading }) => loading,
);

export const getStandingsError = createSelector(
  getStandings,
  ({ error }) => error,
);

export const getStandingsGroupBy = createSelector(
  getStandings,
  ({ groupBy }) => groupBy,
);
