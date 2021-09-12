import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Spinner from '../Spinner';
import { useStyles } from './styles';

const LoadingLayout = ({ loading, error, data, children }) => {
  const classes = useStyles();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="block-center">
        <ErrorOutlineIcon className={classes.icon} />
        <p className={classes.message}>
          {error.message ? error.message : 'server is not available'}
        </p>
      </div>
    );
  }

  return (
    <>
      {Object.keys(data).length !== 0 || data.length !== 0 ? (
        children
      ) : (
        <div className="block-center">
          <SentimentVeryDissatisfiedIcon className={classes.icon} />
          <p className={classes.message}>No data, please try later</p>
        </div>
      )}
    </>
  );
};

export default LoadingLayout;
