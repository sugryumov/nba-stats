import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStatsAction } from './store/actions';

const StatsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatsAction.request('home_season'));
  }, [dispatch]);

  return <div>StatsContainer</div>;
};

export default StatsContainer;
