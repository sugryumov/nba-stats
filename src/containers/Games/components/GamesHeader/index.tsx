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

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  calendarWrap: {
    position: 'relative',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  calendar: {
    position: 'relative',
    zIndex: 5,

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 4,
  },
  switchWrap: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 30,
    },
  },
  switch: {
    marginBottom: 3,
  },
}));

const GamesHeader = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <GameCalendar
        styles={{
          calendarWrap: classes.calendarWrap,
          calendar: classes.calendar,
          icon: classes.icon,
        }}
      />
      <GameResultSwitch
        styles={{ switchWrap: classes.switchWrap, switch: classes.switch }}
      />
    </Paper>
  );
};

export default GamesHeader;
