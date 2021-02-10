import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { getShowScoreGames } from 'common/selectors/Games';
import { showScoreGame } from 'pages/Games/store';
import { useStyles } from './styles';

const GameResultSwitch = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const showScore = useSelector(getShowScoreGames);

  const handleChangeSwitch = () => {
    dispatch(showScoreGame(!showScore));
  };

  return (
    <div className={classes.root}>
      SHOW SCORES{' '}
      <Switch
        className={classes.switch}
        checked={showScore}
        onChange={handleChangeSwitch}
        color="primary"
      />
    </div>
  );
};

export default GameResultSwitch;
