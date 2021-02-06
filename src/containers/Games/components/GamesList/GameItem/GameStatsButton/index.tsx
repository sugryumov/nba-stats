import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Paths } from 'enums/routes';
import { getChangedDate } from 'common/selectors/Games';
import { changedActiveTab } from 'containers/GameStats/store';
import { useStyles } from './styles';

const GameStatsButton = ({ gameId, gameUrlCode }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);

  const toPath = `${process.env.PUBLIC_URL}${Paths.gameStats}?date=${changedDate}&id=${gameId}&code=${gameUrlCode}`;

  return (
    <Link to={toPath} className={classes.root}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => dispatch(changedActiveTab('box-score'))}
      >
        BOX SCORE
      </Button>

      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => dispatch(changedActiveTab('details'))}
      >
        GAME DETAILS
      </Button>
    </Link>
  );
};

export default GameStatsButton;
