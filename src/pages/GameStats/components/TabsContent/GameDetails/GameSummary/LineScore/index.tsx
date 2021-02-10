import React from 'react';
import { useSelector } from 'react-redux';
import { TColumns } from 'types';
import { getLineScore } from 'common/selectors/GameStats';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { useStyles } from './styles';

const LineScore = () => {
  const classes = useStyles();

  const lineScore = useSelector(getLineScore);

  const [createColumn] = lineScore;

  let currentQuarter: number = 1;
  let currentOvertime: number = 1;

  const scoreColumn = Object.entries(createColumn).reduce(
    (acc, [key], idx): TColumns[] => {
      if (key.match(/Q[0-9]\w/g)) {
        let columnHead: string;

        if (currentQuarter <= 4) {
          columnHead = `Q${currentQuarter}`;
          currentQuarter++;
        } else {
          columnHead = `OT${currentOvertime}`;
          currentOvertime++;
        }

        return [
          ...acc,
          {
            id: idx,
            component: Column,
            name: key,
            label: columnHead,
            styles: {
              backgroundColor: 'transparent',
            },
          },
        ];
      }

      return acc;
    },
    [],
  );

  const firstColumn: TColumns = {
    id: 1,
    component: Column,
    name: 'triCode',
    label: '',
    styles: {
      minWidth: 50,
      position: 'relative',
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  };

  const lastColumn: TColumns = {
    id: 20,
    component: Column,
    name: 'score',
    label: 'FINAL',
    styles: {
      backgroundColor: 'transparent',
    },
  };

  const columns: TColumns[] = [firstColumn, ...scoreColumn, lastColumn];

  return (
    <div className={classes.root}>
      <ReusableTable data={lineScore} columns={columns} />
    </div>
  );
};

export default LineScore;
