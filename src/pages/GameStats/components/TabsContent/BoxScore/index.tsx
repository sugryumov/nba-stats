import React from 'react';
import { useSelector } from 'react-redux';
import { getActivePlayers } from 'common/selectors/GameStats';
import BoxScoreTable from 'pages/GameStats/components/TabsContent/BoxScore/BoxScoreTable';

const BoxScore = () => {
  const activePlayers = useSelector(getActivePlayers);

  return (
    <>
      {Object.entries(activePlayers)
        ?.filter(([_, players]) => players)
        ?.map(([team, players]) => {
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
