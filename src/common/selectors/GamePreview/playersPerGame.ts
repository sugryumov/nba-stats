import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';
import { FULL_NAME_TEAMS } from 'common/constants/fullNameTeams';

export const playersPerGame = (state: TState) =>
  state.gamePreview.playersPerGame;

const replaceTriCodeToName = team => {
  const findTeam = FULL_NAME_TEAMS.find(el => el.teamId === team?.id)?.fullName;

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
