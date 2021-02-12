import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';

const fakeData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const StatsChart = ({ playerStatsData, selectedPlayers }) => {
  const data = selectedPlayers.map(({ id }) => {
    return playerStatsData.reduce(
      (acc, cur) =>
        id === cur.player.id
          ? {
              ...acc,
              [id]: acc[id] ? [...acc[id], cur.pts] : [0],
            }
          : acc,
      {},
    );
  });

  // const test = playerStatsData.map((el, idx) => {
  //   return selectedPlayers.reduce((acc, cur) => {
  //     return {
  //       ...acc,
  //       name: idx,
  //       [cur.id]: cur.id === el.player.id && el.pts,
  //     };
  //   }, {});
  // });

  return <Line type="" data={fakeData} options={options} />;
};

export default StatsChart;
