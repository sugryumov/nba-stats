import React from 'react';
import { useSelector } from 'react-redux';
import { getExtraInfo } from 'common/selectors/GameStats';
import { useStyles } from './styles';

const LineExtraStats = () => {
  const classes = useStyles();

  const { leadChanges, timesTied } = useSelector(getExtraInfo);

  return (
    <div className={classes.root}>
      <div className={classes.leadChanges}>
        <p className={classes.title}>
          lead <br /> changes
        </p>
        <p className={classes.score}>{leadChanges}</p>
      </div>

      <div className={classes.timesTied}>
        <p className={classes.title}>
          times <br /> tied
        </p>
        <p className={classes.score}>{timesTied}</p>
      </div>
    </div>
  );
};

export default LineExtraStats;
