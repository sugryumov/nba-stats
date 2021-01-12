import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TPlayer } from 'interfaces';
import { firstRequest } from 'helpers/firstRequest';
import { searchPlayerAction } from './store/SearchPlayer/actions';
import { seasonAveragesAction } from './store/SeasonAverages/actions';
import SearchPlayer from './components/SearchPlayer';
import StatsPlayer from './components/StatsPlayer';
import ChangedPlayerChip from './components/ChangedPlayerChip';
import './index.css';

const PlayerStatisticContainer = () => {
  const dispatch = useDispatch();

  const [changedPlayers, setChangedPlayers] = useState<TPlayer[]>(firstRequest);

  const onFinishSearch = (value: string) => {
    dispatch(searchPlayerAction.request({ search: value }));
  };

  useEffect(() => {
    const requestBody = changedPlayers?.map(({ id }): number => id);

    if (requestBody) {
      dispatch(seasonAveragesAction.request({ player_ids: requestBody }));
    }
  }, [dispatch, changedPlayers]);

  return (
    <div className="player-statistic-container">
      <SearchPlayer
        onFinishSearch={onFinishSearch}
        changedPlayers={changedPlayers}
        setChangedPlayers={setChangedPlayers}
      />

      <ChangedPlayerChip
        changedPlayers={changedPlayers}
        setChangedPlayers={setChangedPlayers}
      />

      {changedPlayers?.length ? (
        <StatsPlayer changedPlayers={changedPlayers} />
      ) : null}
    </div>
  );
};

export default PlayerStatisticContainer;
