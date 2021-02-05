import { combineReducers } from '@reduxjs/toolkit';
import gamesReducer from 'containers/GamesToolkit/store';

export const rootReducer = combineReducers({
  games: gamesReducer,
});
