import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStandingsData,
  getStandingsError,
  getStandingsLoading,
  getStandingsGroupBy,
} from 'common/selectors/Standings/getStandings';
import { getStandingsAction, standingsGroupByAction } from './store/actions';
import LoadingLayout from 'common/components/LoadingLayout';
import StandingsTable from './components/StandingsTable';
import StandingsHeader from './components/StandingsHeader';

const StandingsContainer = () => {
  const dispatch = useDispatch();

  const standingsData = useSelector(getStandingsData);
  const standingsLoading = useSelector(getStandingsLoading);
  const standingsError = useSelector(getStandingsError);
  const standingsGroupBy = useSelector(getStandingsGroupBy);

  useEffect(() => {
    dispatch(getStandingsAction.request(standingsGroupBy));
  }, [dispatch, standingsGroupBy]);

  const renderTable = () => {
    return Object.entries(standingsData)?.map(([conference, team]) => {
      const table = (data, name) => (
        <div key={name} style={{ paddingBottom: 40 }}>
          <StandingsTable data={data} name={name} />
        </div>
      );

      if (Array.isArray(team)) {
        return table(team, conference);
      }

      return Object.entries(team)
        ?.sort()
        .map(([division, divTeam]) => table(divTeam, division));
    });
  };

  const handleGroupBy = event => {
    dispatch(standingsGroupByAction(event.target.value));
  };

  return (
    <>
      <StandingsHeader
        groupBy={standingsGroupBy}
        handleGroupBy={handleGroupBy}
      />
      <LoadingLayout
        data={standingsData.east}
        loading={standingsLoading}
        error={standingsError}
      >
        {renderTable()}
      </LoadingLayout>
    </>
  );
};

export default StandingsContainer;
