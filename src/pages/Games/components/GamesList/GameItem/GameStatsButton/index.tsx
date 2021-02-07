import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { getChangedDate } from 'common/selectors/Games/gamesList';
import { changedActiveTabAction } from 'pages/GameStats/store/BoxScore/actions';
import { useStyles } from './styles';
import { ROUTES } from 'common/constants/routes';

const GameStatsButton = ({ gameId, gameUrlCode }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);

  const toPath = `${ROUTES.GAME_STATS.PATH}?date=${changedDate}&id=${gameId}&code=${gameUrlCode}`;

  return (
    <Link to={toPath} className={classes.root}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => dispatch(changedActiveTabAction('box-score'))}
      >
        BOX SCORE
      </Button>

      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => dispatch(changedActiveTabAction('details'))}
      >
        GAME DETAILS
      </Button>
    </Link>
  );
};

export default GameStatsButton;
