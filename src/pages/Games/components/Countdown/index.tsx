import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getTimeRemaining } from 'helpers/countdown';
import { CURRENT_SEASON } from 'common/constants/currentSeason';
import { useStyles } from './styles';

const Countdown = ({ deadline }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [timeBeforeStartSeason, setTimeBeforeStartSeason] = useState<{
    difference: number;
    time: { [key: string]: string } | null;
  }>({
    difference: 0,
    time: null,
  });

  /** Функция получения оставшегося времени до старта чемпионата */
  const updateTime = useCallback(() => {
    const timeRemaining = getTimeRemaining(deadline);

    setTimeBeforeStartSeason(timeRemaining);
  }, [deadline]);

  /** useEffect для запуска updateTime при первом рендере */
  useEffect(() => {
    updateTime();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => updateTime(), 1000);

    if (timeBeforeStartSeason?.difference < 0) {
      clearInterval(timeInterval);
    }

    return () => clearInterval(timeInterval);
  }, [dispatch, deadline, timeBeforeStartSeason, updateTime]);

  const renderTimer = () =>
    timeBeforeStartSeason?.time &&
    Object.entries(timeBeforeStartSeason?.time)?.map(
      ([key, value]: [string, string]) => {
        return (
          <div key={key} className={classes.item}>
            <Typography variant="body1" className={classes.value}>
              {value}
            </Typography>
            <Typography variant="body1" className={classes.key}>
              {key}
            </Typography>
          </div>
        );
      },
    );

  return timeBeforeStartSeason?.difference > 0 ? (
    <>
      <div className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          NBA Season {CURRENT_SEASON} Starts
        </Typography>

        <div className={classes.time}>{renderTimer()}</div>
      </div>
    </>
  ) : null;
};

export default Countdown;
