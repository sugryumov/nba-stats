import React from 'react';
import dayjs from 'dayjs';
import { statusGame } from 'common/constants/statusGame';
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

  const mskTime = dayjs(startTimeUTC).tz('Europe/Moscow').format('DD.MM HH:mm');

  return (
    <div className={classes.root}>
      {extendedStatusNum === statusGame.ppd ? (
        <p className={classes.ppdStatus}>PPD</p>
      ) : statusNum === statusGame.notStarted ? (
        <>
          <p className={classes.easternTime}>{startTimeEastern}</p>
          <p className={classes.mskTime}>{`${mskTime} MSK`}</p>
        </>
      ) : statusNum === statusGame.live ? (
        <>
          <span className={classes.live}>LIVE</span>
          <p>{`Q${period.current} ${clock ? clock : '0.0'}`}</p>
        </>
      ) : (
        <p>FINAL</p>
      )}
    </div>
  );
};

export default GameStatus;
