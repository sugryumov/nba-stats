import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { flatObject } from 'helpers/normalize';
import { TActivePlayers } from 'pages/GameStats/store/BoxScore/entities';
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
    const vLineScore = hTeam && Object.fromEntries(flatObject(vTeam));
    const hLineScore = vTeam && Object.fromEntries(flatObject(hTeam));

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

const getInfo = (team, statName, triCode?) => {
  const [player] = team?.leaders[statName].players;
  const { value } = team?.leaders[statName];

  return {
    fullName: `${player.firstName} ${player.lastName}`,
    value,
    triCode,
  };
};

export const getGameLeadersPoints = createSelector(
  getBoxScore,
  ({
    response: {
      stats: { vTeam, hTeam },
      basicGameData,
    },
  }) => {
    const vTriCode = basicGameData.vTeam.triCode;
    const hTriCode = basicGameData.hTeam.triCode;

    return [
      getInfo(vTeam, 'points', vTriCode),
      getInfo(hTeam, 'points', hTriCode),
    ];
  },
);

export const getGameLeadersAssists = createSelector(
  getBoxScore,
  ({
    response: {
      stats: { vTeam, hTeam },
    },
  }) => [getInfo(vTeam, 'assists'), getInfo(hTeam, 'assists')],
);

export const getGameLeadersRebounds = createSelector(
  getBoxScore,
  ({
    response: {
      stats: { vTeam, hTeam },
    },
  }) => [getInfo(vTeam, 'rebounds'), getInfo(hTeam, 'rebounds')],
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

export const getTriCode = createSelector(
  getBoxScore,
  ({
    response: {
      basicGameData: { vTeam, hTeam },
    },
  }) => [{ triCode: vTeam.triCode }, { triCode: hTeam.triCode }],
);

export const getBoxScoreLoading = createSelector(
  getBoxScore,
  ({ loading }) => loading,
);

export const getBoxScoreError = createSelector(
  getBoxScore,
  ({ error }) => error,
);

export const getActiveTab = createSelector(
  getBoxScore,
  ({ activeTab }) => activeTab,
);
