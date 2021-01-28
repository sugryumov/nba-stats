import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import { Paths } from 'enums/routes';
import { useSelector } from 'react-redux';
import { getChangedDate } from 'common/selectors/Games/gamesList';

const GamePreviewButton = ({ gameId, gameUrlCode, disabled }) => {
  const classes = useStyles();

  const changedDate = useSelector(getChangedDate);

  const toPath = `${process.env.PUBLIC_URL}${Paths.gamePreview}?date=${changedDate}&id=${gameId}&code=${gameUrlCode}`;

  return (
    <Link to={toPath} onClick={e => disabled && e.preventDefault()}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        disabled={disabled}
      >
        PREVIEW
      </Button>
    </Link>
  );
};

export default GamePreviewButton;
