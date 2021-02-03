import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { getStatsPlayers } from 'common/selectors/Stats/getStats';
import StatsItem from 'containers/Stats/components/StatsPlayers/StatsItem';

const StatsPlayers = () => {
  const players = useSelector(getStatsPlayers);

  const renderContent = () => {
    return players?.map(({ title, playerstats }, idx) => {
      return (
        <Grid key={`${title}_${idx}`} item lg={4} sm={6} xs={12}>
          <StatsItem title={title} playerstats={playerstats} />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={3}>
      {renderContent()}
    </Grid>
  );
};

export default StatsPlayers;
