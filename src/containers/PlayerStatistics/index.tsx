import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChangedPlayers } from 'common/selectors/Statistics/searchPlayers';
import { searchPlayerAction } from './store/SearchPlayer/actions';
import { seasonAveragesAction } from './store/SeasonAverages/actions';
import SearchPlayer from './components/SearchPlayer';
import SeasonAverages from './components/SeasonAverages';
import './index.css';

const PlayerStatisticContainer = () => {
  const dispatch = useDispatch();

  const changedPlayers = useSelector(getChangedPlayers);

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
      <SearchPlayer onFinishSearch={onFinishSearch} />

      {changedPlayers && changedPlayers?.length ? <SeasonAverages /> : null}
    </div>
  );
};

export default PlayerStatisticContainer;
