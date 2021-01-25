import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { flatObject } from 'helpers/normalize';
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
    const gameData = activePlayers.reduce((acc, cur) => {
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

    const addTotals = (name, players, totals) => {
      const newObj = {
        ...totals,
        firstName: 'TOTALS',
        lastName: '',
        min: '',
      };

      return { [name]: players && players.concat(newObj) };
    };

    const [vName, hName] = Object.keys(gameData);
    const [vPlayers, hPlayers] = Object.values(gameData);

    const vData = addTotals(vName, vPlayers, vTeam?.totals);
    const hData = addTotals(hName, hPlayers, hTeam?.totals);

    return { ...vData, ...hData };
  },
);

export const getLineScore = createSelector(
  getBoxScore,
  ({
    response: {
      basicGameData: { vTeam, hTeam },
    },
  }) => {
    const vLineScore = Object.fromEntries(flatObject(vTeam));
    const hLineScore = Object.fromEntries(flatObject(hTeam));

    return [vLineScore, hLineScore];
  },
);

export const getLineScoreStats = createSelector(
  getBoxScore,
  ({
    response: {
      stats: { vTeam, hTeam },
    },
  }) => {
    return [vTeam, hTeam];
  },
);

export const getGameDate = createSelector(
  getBoxScore,
  ({
    response: {
      basicGameData: { homeStartDate },
    },
  }) => {
    return homeStartDate;
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
