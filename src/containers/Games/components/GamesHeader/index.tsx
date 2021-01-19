import React from 'react';
import GameCalendar from './GameCalendar';
import GameResultSwitch from './GameResultSwitch';
import Paper from '@material-ui/core/Paper';
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
