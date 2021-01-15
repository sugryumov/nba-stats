import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import Spinner from '../Spinner';

const useStyles = makeStyles((theme: ITheme) => ({
  message: {
    marginTop: 15,
    color: theme.palette.primaryColor,
  },
  icon: {
    fontSize: 45,
    color: theme.palette.primaryColor,
  },
}));

const LoadingLayout = ({ loading, error, data, children }) => {
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="block-center">
          <ErrorOutlineIcon className={classes.icon} />
          <p className={classes.message}>
            {error ? error.message : 'server is not available'}
          </p>
        </div>
      ) : data && data.length >= 1 ? (
        children
      ) : (
        <div className="block-center">
          <SentimentVeryDissatisfiedIcon className={classes.icon} />
          <p className={classes.message}>No data, choose another date</p>
        </div>
      )}
    </>
  );
};
export default LoadingLayout;
