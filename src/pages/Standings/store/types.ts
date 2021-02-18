import { TStandingsTeamState } from './StandingsTeam/types';
import { TScheduleTeamState } from './ScheduleTeam/types';

export type TStandingsState = {
  standingsTeam: TStandingsTeamState;
  scheduleTeam: TScheduleTeamState;
};
