import React from 'react';
import Paper from '@material-ui/core/Paper';
import GameCalendar from 'containers/Games/components/GamesHeader/GameCalendar';
import GameResultSwitch from 'containers/Games/components/GamesHeader/GameResultSwitch';
import { useStyles } from './styles';

const GamesHeader = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <GameCalendar />
      <GameResultSwitch />
    </Paper>
  );
};

export default GamesHeader;
