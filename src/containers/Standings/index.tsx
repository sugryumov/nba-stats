import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getConfStandingsData,
  getConfStandingsError,
  getConfStandingsLoading,
} from 'common/selectors/Standings/conference';
import LoadingLayout from 'common/components/LoadingLayout';
import { confStandingsAction } from './store/Conference/actions';
import StandingsTable from './components/StandingsTable';

const StandingsContainer = () => {
  const dispatch = useDispatch();

  const confStandingsData = useSelector(getConfStandingsData);
  const confStandingsLoading = useSelector(getConfStandingsLoading);
  const confStandingsError = useSelector(getConfStandingsError);

  useEffect(() => {
    dispatch(confStandingsAction.request());
  }, [dispatch]);

  const renderTable = () => {
    return Object.entries(confStandingsData)?.map(([conference, data]) => (
      <StandingsTable key={conference} data={data} conference={conference} />
    ));
  };

  return (
    <LoadingLayout
      data={confStandingsData.east}
      loading={confStandingsLoading}
      error={confStandingsError}
    >
      <div style={{ paddingBottom: 40 }}>{renderTable()}</div>
    </LoadingLayout>
  );
};

export default StandingsContainer;
