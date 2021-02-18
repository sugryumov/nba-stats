import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllStandingsTeamData,
  getStandingsTeamData,
  getStandingsTeamLoading,
  getStandingsTeamError,
  getStandingsTeamGroupBy,
} from 'common/selectors/Standings/standingsTeam';
import {
  fetchStandingsTeam,
  standingsGroupByAction,
} from 'pages/Standings/store/StandingsTeam';
import LoadingLayout from 'common/components/LoadingLayout';
import StandingsTable from './components/StandingsTable';
import StandingsHeader from './components/StandingsHeader';

const StandingsContainer = () => {
  const dispatch = useDispatch();

  const standingsData = useSelector(getStandingsTeamData);
  const standingsLoading = useSelector(getStandingsTeamLoading);
  const standingsError = useSelector(getStandingsTeamError);
  const standingsGroupBy = useSelector(getStandingsTeamGroupBy);
  const standingsAll = useSelector(getAllStandingsTeamData);

  useEffect(() => {
    dispatch(fetchStandingsTeam(standingsGroupBy));
  }, [dispatch, standingsGroupBy]);

  const renderTable = () => {
    return (
      standingsData &&
      Object.entries(standingsData)?.map(([conference, team]) => {
        const table = (data, name) => (
          <StandingsTable key={name} data={data} name={name} />
        );

        if (Array.isArray(team)) {
          return table(team, conference);
        }

        return Object.entries(team)
          ?.sort()
          .map(([division, divTeam]) => table(divTeam, division));
      })
    );
  };

  const handleGroupBy = event => {
    dispatch(standingsGroupByAction(event.target.value));
  };

  const renderAllStandings = () => (
    <StandingsTable key={1} data={standingsAll} name={'all'} />
  );

  return (
    <>
      <StandingsHeader
        groupBy={standingsGroupBy}
        handleGroupBy={handleGroupBy}
      />
      <LoadingLayout
        data={standingsData || standingsAll}
        loading={standingsLoading}
        error={standingsError}
      >
        {standingsGroupBy === 'standings_all'
          ? renderAllStandings()
          : renderTable()}
      </LoadingLayout>
    </>
  );
};

export default StandingsContainer;
