import React from 'react';
import { useSelector } from 'react-redux';
import { getActivePlayers } from 'common/selectors/GameStats';
import BoxScoreTable from './BoxScoreTable';

const BoxScore = () => {
  const activePlayers = useSelector(getActivePlayers);

  return (
    <>
      {Object.entries(activePlayers)?.map(([team, players]) => {
        return (
          <div key={team} style={{ paddingBottom: 40 }}>
            <BoxScoreTable data={players} team={team} />
          </div>
        );
      })}
    </>
  );
};

export default BoxScore;
