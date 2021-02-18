import { combineReducers } from '@reduxjs/toolkit';
import standingsTeamReducer from './StandingsTeam';
import scheduleTeamReducer from './ScheduleTeam';

const standingsReducer = combineReducers({
  standingsTeam: standingsTeamReducer,
  scheduleTeam: scheduleTeamReducer,
});

export default standingsReducer;
