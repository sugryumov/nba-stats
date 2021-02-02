import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStatsData,
  getStatsError,
  getStatsGroupBy,
  getStatsLoading,
} from 'common/selectors/Stats/getStats';
import LoadingLayout from 'common/components/LoadingLayout';
import {
  getStatsAction,
  statsGroupByAction,
} from 'containers/Stats/store/actions';
import StatsHeader from 'containers/Stats/components/StatsHeader';
import StatsPlayers from 'containers/Stats/components/StatsPlayers';

const StatsContainer = () => {
  const dispatch = useDispatch();

  const statsData = useSelector(getStatsData);
  const statsLoading = useSelector(getStatsLoading);
  const statsError = useSelector(getStatsError);
  const statsGroupBy = useSelector(getStatsGroupBy);

  useEffect(() => {
    dispatch(getStatsAction.request(statsGroupBy));
  }, [dispatch, statsGroupBy]);

  const handleGroupBy = event => {
    dispatch(statsGroupByAction(event.target.value));
  };

  return (
    <>
      <StatsHeader groupBy={statsGroupBy} handleGroupBy={handleGroupBy} />

      <LoadingLayout data={statsData} loading={statsLoading} error={statsError}>
        <StatsPlayers />
      </LoadingLayout>
    </>
  );
};

export default StatsContainer;
