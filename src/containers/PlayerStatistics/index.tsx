import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TPlayer } from 'interfaces';
import { searchPlayerAction } from './store/SearchPlayer/actions';
import SearchPlayer from './components/SearchPlayer';
import './index.css';

const PlayerStatisticContainer = () => {
  const dispatch = useDispatch();

  const [changedPlayer, setChangedPlayer] = useState<TPlayer[]>([]);

  const onFinishSearch = (value: string) => {
    dispatch(searchPlayerAction.request({ search: value }));
  };

  useEffect(() => {
    console.log('changedPlayer', changedPlayer);
  }, [changedPlayer]);

  return (
    <div className="player-statistic-container">
      <SearchPlayer
        setChangedPlayer={setChangedPlayer}
        onFinishSearch={onFinishSearch}
      />
    </div>
  );
};

export default PlayerStatisticContainer;
