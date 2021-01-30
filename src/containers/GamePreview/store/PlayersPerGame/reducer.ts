import { createReducer, getType } from 'typesafe-actions';
import { clearPlayersPerGameAction, getPlayersPerGameAction } from './actions';
import { IGetPlayersPerGame } from './entities';

const initialState: IGetPlayersPerGame = {
  response: {
    sports_content: {
      game: {
        date: '',
        gameId: '',
        home: null,
        visitor: null,
      },
    },
  },
  error: null,
  loading: false,
};

export const getPlayersPerGameReducer = createReducer(initialState, {
  [getType(getPlayersPerGameAction.request)]: state => ({
    ...state,
    response: {
      sports_content: {
        game: {
          date: '',
          gameId: '',
          home: null,
          visitor: null,
        },
      },
    },
    error: null,
    loading: true,
  }),
  [getType(getPlayersPerGameAction.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(getPlayersPerGameAction.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),

  [getType(clearPlayersPerGameAction)]: state => ({
    ...state,
    response: {
      sports_content: {
        game: {
          date: '',
          gameId: '',
          home: null,
          visitor: null,
        },
      },
    },
  }),
});
