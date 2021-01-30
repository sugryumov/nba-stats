import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { teamList } from 'common/constants/teams';

export const playersPerGame = (state: IState) =>
  state.gamePreview.playersPerGame;

const replaceTriCodeToName = team => {
  const findTeam = teamList.find(el => el.teamId === team?.id)?.fullName;

  return {
    ...team,
    name: findTeam,
  };
};

export const getPlayersPerGame = createSelector(
  playersPerGame,
  ({
    response: {
      sports_content: {
        game: { home, visitor },
      },
    },
  }) => {
    const hTeam = home && replaceTriCodeToName(home);
    const vTeam = visitor && replaceTriCodeToName(visitor);

    return { hTeam, vTeam };
  },
);

export const getPlayersPerGameLoading = createSelector(
  playersPerGame,
  ({ loading }) => loading,
);

export const getPlayersPerGameError = createSelector(
  playersPerGame,
  ({ error }) => error,
);
