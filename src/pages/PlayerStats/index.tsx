import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedPlayers } from 'common/selectors/PlayerStats/searchPlayers';
import { fetchSearchPlayer } from './store/SearchPlayer';
import { fetchSeasonAverages } from './store/SeasonAverages';
import SearchPlayer from 'pages/PlayerStats/components/SearchPlayer';
import StatsPlayer from 'pages/PlayerStats/components/StatsPlayer';
import ChangedPlayerChip from 'pages/PlayerStats/components/ChangedPlayerChip';

const PlayerStatisticContainer = () => {
  const dispatch = useDispatch();

  const selectedPlayers = useSelector(getSelectedPlayers);

  const onFinishSearch = (value: string) => {
    dispatch(fetchSearchPlayer({ search: value }));
  };

  useEffect(() => {
    const requestBody = selectedPlayers?.map(({ id }): number => id);

    if (requestBody.length) {
      dispatch(fetchSeasonAverages({ player_ids: requestBody }));
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
        <StatsPlayer selectedPlayers={selectedPlayers} />
      ) : null}
    </>
  );
};

export default PlayerStatisticContainer;
