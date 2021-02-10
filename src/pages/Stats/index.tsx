import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStatsData,
  getStatsError,
  getStatsGroupBy,
  getStatsLoading,
} from 'common/selectors/Stats';
import LoadingLayout from 'common/components/LoadingLayout';
import { fetchStats, statsGroupByAction } from 'pages/Stats/store';
import StatsHeader from 'pages/Stats/components/StatsHeader';
import StatsContent from 'pages/Stats/components/StatsContent';

const StatsContainer = () => {
  const dispatch = useDispatch();

  const statsData = useSelector(getStatsData);
  const statsLoading = useSelector(getStatsLoading);
  const statsError = useSelector(getStatsError);
  const statsGroupBy = useSelector(getStatsGroupBy);

  useEffect(() => {
    dispatch(fetchStats(statsGroupBy));
  }, [dispatch, statsGroupBy]);

  const handleGroupBy = event => {
    dispatch(statsGroupByAction(event.target.value));
  };

  return (
    <>
      <StatsHeader groupBy={statsGroupBy} handleGroupBy={handleGroupBy} />

      <LoadingLayout data={statsData} loading={statsLoading} error={statsError}>
        <StatsContent />
      </LoadingLayout>
    </>
  );
};

export default StatsContainer;
