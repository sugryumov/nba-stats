import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedPlayers } from 'common/selectors/PlayerStats/searchPlayers';
import { fetchSearchPlayer } from 'pages/PlayerStats//store/SearchPlayer';
import { fetchSeasonAverages } from 'pages/PlayerStats//store/SeasonAverages';
import SearchPlayer from 'pages/PlayerStats/components/SearchPlayer';
import StatsPlayer from 'pages/PlayerStats/components/StatsPlayer';
import ChangedPlayerChip from 'pages/PlayerStats/components/ChangedPlayerChip';
// import { fetchPlayerStats } from 'pages/PlayerStats/store/PlayerStats';
// import StatsChart from 'pages/PlayerStats/components/StatsChart';
// import { getPlayerStatsData } from 'common/selectors/PlayerStats/playerStats';

const PlayerStatisticContainer = () => {
  const dispatch = useDispatch();

  const selectedPlayers = useSelector(getSelectedPlayers);
  // const playerStatsData = useSelector(getPlayerStatsData);

  const onFinishSearch = (value: string) => {
    dispatch(fetchSearchPlayer({ search: value }));
  };

  useEffect(() => {
    const requestBody = selectedPlayers?.map(({ id }): number => id);

    if (requestBody.length) {
      dispatch(fetchSeasonAverages({ player_ids: requestBody }));
      // dispatch(
      //   fetchPlayerStats({
      //     player_ids: requestBody,
      //     seasons: [2020],
      //     per_page: 100,
      //   }),
      // );
    }
  }, [dispatch, selectedPlayers]);

  return (
    <>
      <SearchPlayer
        onFinishSearch={onFinishSearch}
        selectedPlayers={selectedPlayers}
      />

      <ChangedPlayerChip selectedPlayers={selectedPlayers} />

      {selectedPlayers?.length ? (
        <>
          <StatsPlayer selectedPlayers={selectedPlayers} />

          {/* <StatsChart
            playerStatsData={playerStatsData}
            selectedPlayers={selectedPlayers}
          /> */}
        </>
      ) : null}
    </>
  );
};

export default PlayerStatisticContainer;
