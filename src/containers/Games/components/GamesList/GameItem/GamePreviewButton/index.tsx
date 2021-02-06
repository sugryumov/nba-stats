import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Paths } from 'enums/routes';
import { getChangedDate } from 'common/selectors/Games';
import { useStyles } from './styles';

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
