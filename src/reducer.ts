import { combineReducers } from 'redux';
import { statisticsReducer } from 'containers/PlayerStatistics/store/reducers';

const reducers = {
  statistics: statisticsReducer,
};

export const reducer = combineReducers(reducers);
