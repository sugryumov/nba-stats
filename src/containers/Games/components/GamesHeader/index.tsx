import React from 'react';
import GameCalendar from './GameCalendar';
import GameResultSwitch from './GameResultSwitch';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 32,
  },
}));

const GamesHeader = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <GameCalendar />
      <GameResultSwitch />
    </Paper>
  );
};

export default GamesHeader;
