import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'types/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  spinner: {
    display: 'block',
    margin: '70px auto 0',
    color: theme.palette.primaryColor,
  },
}));

const Spinner = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.spinner} />;
};

export default Spinner;
