import { createSelector } from 'reselect';
import { TState } from 'store/types';
import { TGameItem } from 'containers/GamesToolkit/store/types';

export const getGamesList = (state: TState) => state.games;

export const getGamesListData = createSelector(
  getGamesList,
  ({ response, showScore }): Array<TGameItem> => {
    console.log('response', response);

    const gamesList = response.games
      .map(
        ({
          gameId,
          startDateEastern,
          startTimeEastern,
          startTimeUTC,
          hTeam,
          vTeam,
          endTimeUTC,
          statusNum,
          extendedStatusNum,
          clock,
          period,
        }) => {
          return {
            gameId,
            startDateEastern,
            startTimeEastern,
            startTimeUTC,
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
            extendedStatusNum,
            clock,
            period,
          };
        },
      )
      .sort((a, b) => b.extendedStatusNum - a.extendedStatusNum);

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

export const getChangedDate = createSelector(
  getGamesList,
  ({ changedDate }) => changedDate,
);
