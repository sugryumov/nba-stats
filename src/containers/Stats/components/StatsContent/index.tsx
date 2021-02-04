import React from 'react';
import { useSelector } from 'react-redux';
import {
  getStatsPlayers,
  getStatsTeams,
} from 'common/selectors/Stats/getStats';
import StatsPaper from 'containers/Stats/components/StatsContent/StatsPaper';

const StatsContent = () => {
  const players = useSelector(getStatsPlayers);
  const teams = useSelector(getStatsTeams);

  return (
    <>
      <StatsPaper data={players} title="Players" type="players" />
      <StatsPaper data={teams} title="Teams" type="teams" />
    </>
  );
};

export default StatsContent;
