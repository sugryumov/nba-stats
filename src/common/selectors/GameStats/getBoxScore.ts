import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { TActivePlayers } from 'containers/GameStats/store/BoxScore/entities';
import { teamList } from 'common/constants/teams';

export const getBoxScore = (state: IState) => state.gameStats.getBoxScore;

export const getActivePlayers = createSelector(
  getBoxScore,
  ({
    response: {
      stats: { activePlayers, hTeam, vTeam },
    },
  }): { [key: string]: Array<TActivePlayers> } => {
    return activePlayers.reduce((acc, cur) => {
      const { teamId, fullName } = teamList.find(
        ({ teamId }) => teamId === cur.teamId,
      )!;

      return teamId === cur.teamId
        ? {
            ...acc,
            [fullName]: acc[fullName] ? [...acc[fullName], cur] : [cur],
          }
        : acc;
    }, {});
  },
);

export const getTeamStats = createSelector(
  getBoxScore,
  ({
    response: {
      stats: { hTeam, vTeam },
    },
  }) => {
    return { hTeam, vTeam };
  },
);

export const getBoxScoreLoading = createSelector(
  getBoxScore,
  ({ loading }) => loading,
);

export const getBoxScoreError = createSelector(
  getBoxScore,
  ({ error }) => error,
);
