import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Paths } from 'enums/routes';
import { getChangedDate } from 'common/selectors/Games/gamesList';
import { useStyles } from './styles';
import { changedActiveTabAction } from 'containers/GameStats/store/BoxScore/actions';

const BoxScoreButton = ({ gameId, gameUrlCode, disabled }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);

  const toPath = `${process.env.PUBLIC_URL}${Paths.gameStats}?date=${changedDate}&id=${gameId}&code=${gameUrlCode}`;

  return (
    <Link
      to={toPath}
      onClick={e => disabled && e.preventDefault()}
      className={classes.root}
    >
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        disabled={disabled}
        onClick={() => dispatch(changedActiveTabAction('box-score'))}
      >
        BOX SCORE
      </Button>

      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        disabled={disabled}
        onClick={() => dispatch(changedActiveTabAction('details'))}
      >
        GAME DETAILS
      </Button>
    </Link>
  );
};

export default BoxScoreButton;
