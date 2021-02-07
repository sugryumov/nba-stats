import { combineReducers } from 'redux';
import { getGamesListReducer } from 'pages/Games/store/reducer';
import { statisticsReducer } from 'pages/PlayerStats/store/reducers';
import { standingsReducer } from 'pages/Standings/store/reducers';
import { gameStatsReducer } from 'pages/GameStats/store/reducers';
import { gamePreviewReducer } from 'pages/GamePreview/store/reducers';
import { statsReducer } from 'pages/Stats/store/reducers';

const reducer = combineReducers({
  gamesList: getGamesListReducer,
  statistics: statisticsReducer,
  standings: standingsReducer,
  gameStats: gameStatsReducer,
  gamePreview: gamePreviewReducer,
  stats: statsReducer,
});

export default reducer;
