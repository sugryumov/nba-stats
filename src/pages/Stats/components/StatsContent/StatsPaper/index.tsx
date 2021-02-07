import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StatsItem from 'pages/Stats/components/StatsContent/StatsItem';
import { useStyles } from './styles';

const StatsPaper = ({ data, title, type }) => {
  const classes = useStyles();

  const renderPlayers = () => {
    return data?.map(({ title, playerstats, teamstats }, idx) => (
      <Grid key={`${title}_${idx}`} item lg={4} sm={6} xs={12}>
        <StatsItem
          title={title}
          stats={type === 'players' ? playerstats : teamstats}
          type={type}
        />
      </Grid>
    ));
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>

      <Grid container spacing={4}>
        {renderPlayers()}
      </Grid>
    </Paper>
  );
};

export default StatsPaper;
