import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Spinner from '../Spinner';

const LoadingLayout = ({ loading, error, data, children }) => (
  <>
    {loading ? (
      <Spinner />
    ) : error ? (
      <div className="block-center">
        <ErrorOutlineIcon style={{ fontSize: '45px' }} />
        <p style={{ marginTop: '15px' }}>{error.message}</p>
      </div>
    ) : data && data.length >= 1 ? (
      children
    ) : (
      <div className="block-center">
        <SentimentVeryDissatisfiedIcon style={{ fontSize: '45px' }} />
        <p style={{ marginTop: '15px' }}>No data, choose another date</p>
      </div>
    )}
  </>
);

export default LoadingLayout;
