import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { getGameDate } from 'common/selectors/GameStats';
import GameLeaders from './GameLeaders';
import GameSummary from './GameSummary';
import { useStyles } from './styles';

const GameDetails = () => {
  const classes = useStyles();

  const gameDate = useSelector(getGameDate);

  const parseGameDate = dayjs(gameDate).format('DD MMMM YYYY');

  return (
    <Paper className={classes.root}>
      <Hidden xsDown>
        <Typography variant="h6" className={classes.title}>
          {parseGameDate}
        </Typography>
      </Hidden>

      <Hidden smUp>
        <Typography variant="h6" className={classes.title}>
          Summary
        </Typography>
      </Hidden>

      <GameSummary />

      <Typography variant="h6" className={classes.title}>
        Game Leaders
      </Typography>

      <GameLeaders />
    </Paper>
  );
};

export default GameDetails;
