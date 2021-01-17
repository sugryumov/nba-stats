import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { TTeamStandings } from 'containers/Standings/store/entities';

export const getStandings = (state: IState) => state.standings;

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
  }): { east: Array<TTeamStandings>; west: Array<TTeamStandings> } => {
    return { east, west };
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
