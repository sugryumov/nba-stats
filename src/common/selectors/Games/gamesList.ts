import { createSelector } from 'reselect';
import { IState } from 'interfaces';
import { TGameItem } from 'containers/Games/store/entities';

export const getGamesList = (state: IState) => state.gamesList;

export const getGamesListData = createSelector(
  getGamesList,
  ({ response, showScore }): Array<TGameItem> => {
    const gamesList = response.games.map(
      ({
        gameId,
        startDateEastern,
        startTimeEastern,
        hTeam,
        vTeam,
        endTimeUTC,
        statusNum,
      }) => {
        return {
          gameId,
          startDateEastern,
          startTimeEastern,
          hTeam: {
            ...hTeam,
            score: showScore ? hTeam.score : '-',
            win: showScore ? hTeam.win : '',
            loss: showScore ? hTeam.loss : '',
          },
          vTeam: {
            ...vTeam,
            score: showScore ? vTeam.score : '-',
            win: showScore ? vTeam.win : '',
            loss: showScore ? vTeam.loss : '',
          },
          endTimeUTC,
          statusNum,
        };
      },
    );

    return gamesList;
  },
);

export const getGamesListLoading = createSelector(
  getGamesList,
  ({ loading }) => loading,
);

export const getGamesListError = createSelector(
  getGamesList,
  ({ error }) => error,
);


export const getShowScoreGames = createSelector(
  getGamesList,
  ({ showScore }) => showScore,
);