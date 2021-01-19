import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Paths } from 'enums/routes';
import { getChangedDate } from 'common/selectors/Games/gamesList';
import { useStyles } from './styles';

const BoxScoreButton = ({ gameId, gameUrlCode, disabled }) => {
  const classes = useStyles();

  const changedDate = useSelector(getChangedDate);

  const toPath = `${process.env.PUBLIC_URL}${Paths.gameStats}?date=${changedDate}&id=${gameId}&code=${gameUrlCode}`;

  return (
    <Link to={toPath} onClick={e => disabled && e.preventDefault()}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        disabled={disabled}
      >
        BOX SCORE
      </Button>
    </Link>
  );
};

export default BoxScoreButton;
