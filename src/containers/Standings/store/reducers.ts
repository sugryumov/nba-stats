import { combineReducers } from 'redux';
import { confStandingsReducer } from './Conference/reducer';

const standingsReducers = {
  confStandings: confStandingsReducer,
};

export const standingsReducer = combineReducers(standingsReducers);
