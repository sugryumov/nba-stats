import React from 'react';
import dayjs from 'dayjs';
import { GAME_STATUS } from 'common/constants/gameStatus';
import { useStyles } from './styles';

const GameStatus = ({
  startTimeUTC,
  statusNum,
  startTimeEastern,
  period,
  clock,
  extendedStatusNum,
}) => {
  const classes = useStyles();

  const { current, isEndOfPeriod } = period;

  const mskTime = dayjs(startTimeUTC).tz('Europe/Moscow').format('DD.MM HH:mm');

  return (
    <div className={classes.root}>
      {extendedStatusNum === GAME_STATUS.ppd ? (
        <p className={classes.ppdStatus}>PPD</p>
      ) : statusNum === GAME_STATUS.notStarted ? (
        <>
          <p className={classes.easternTime}>{startTimeEastern}</p>
          <p className={classes.mskTime}>{`${mskTime} MSK`}</p>
        </>
      ) : statusNum === GAME_STATUS.live ? (
        <>
          <span className={classes.live}>LIVE</span>
          {isEndOfPeriod ? (
            <p>{`END Q${current}`}</p>
          ) : (
            <p>{`Q${current} ${clock}`}</p>
          )}
        </>
      ) : (
        <p>FINAL</p>
      )}
    </div>
  );
};

export default GameStatus;
