import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Spinner from '../Spinner';
import { useStyles } from './styles';

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
            {error.message ? error.message : 'server is not available'}
          </p>
        </div>
      ) : data ? (
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
