import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { TTeamStandings } from 'containers/Standings/store/Conference/entities';

export const getConfStandings = (state: IState) =>
  state.standings.confStandings;

export const getConfStandingsData = createSelector(
  getConfStandings,
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

export const getConfStandingsLoading = createSelector(
  getConfStandings,
  ({ loading }) => loading,
);

export const getConfStandingsError = createSelector(
  getConfStandings,
  ({ error }) => error,
);
