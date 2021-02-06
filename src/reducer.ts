import { combineReducers } from 'redux';
import { statisticsReducer } from 'containers/PlayerStatistics/store/reducers';
import { standingsReducer } from 'containers/Standings/store/reducers';
import { statsReducer } from 'containers/Stats/store/reducers';

const reducers = {
  statistics: statisticsReducer,
  standings: standingsReducer,
  stats: statsReducer,
};

export const reducer = combineReducers(reducers);
