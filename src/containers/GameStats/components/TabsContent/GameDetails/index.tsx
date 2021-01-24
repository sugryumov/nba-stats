import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { getGameDate } from 'common/selectors/GameStats/getBoxScore';
import LineScore from './LineScore';
import LineScoreStats from './LineScoreStats';
import TotalStats from './TotalStats';
import { useStyles } from './styles';

const GameDetails = () => {
  const classes = useStyles();

  const gameDate = useSelector(getGameDate);

  const parseGameDate = dayjs(gameDate).format('DD MMMM');

  return (
    <Paper className={classes.root}>
      <Hidden xsDown>
        <Typography variant="h6" className={classes.title}>
          {parseGameDate}
        </Typography>
      </Hidden>

      <Hidden smUp>
        <Typography variant="h6" className={classes.title}>
          Line score
        </Typography>
      </Hidden>

      <div className={classes.container}>
        <LineScore />
        <div className={classes.line}></div>
        <LineScoreStats />
      </div>

      <TotalStats />
    </Paper>
  );
};

export default GameDetails;
