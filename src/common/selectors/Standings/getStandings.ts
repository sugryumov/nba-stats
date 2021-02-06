import { createSelector } from 'reselect';
import { TState } from 'store/types';

export const getStandings = (state: TState) => state.standings;

export const getStandingsData = createSelector(
  getStandings,
  ({
    response: {
      league: {
        standard: {
          conference: { east, west },
        },
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

    if (Array.isArray(east)) {
      return { east: conferenceGroup(east), west: conferenceGroup(west) };
    } else {
      return { east: divisionGroup(east), west: divisionGroup(west) };
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
