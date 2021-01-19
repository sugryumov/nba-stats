import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Paths } from 'enums/routes';
import { getChangedDate } from 'common/selectors/Games/gamesList';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  button: {
    'width': '100%',
    'border': 'none !important',
    'boxShadow': `0px 0px 6px -2px rgba(0,0,0,.3)`,
    'borderTopLeftRadius': 0,
    'borderTopRightRadius': 0,
    'fontSize': 12,

    '&:hover': {
      border: 'none',
    },

    '&:disabled': {
      pointerEvents: 'auto',
      cursor: 'not-allowed',
    },
  },
}));

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
