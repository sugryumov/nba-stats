import React from 'react';
import { useSelector } from 'react-redux';
import LoadingLayout from 'common/components/LoadingLayout';
import { tabsGameStats } from 'common/constants/tabsGameStats';
import {
  getActivePlayers,
  getBoxScoreLoading,
  getBoxScoreError,
} from 'common/selectors/GameStats/getBoxScore';
import { useStyles } from './styles';

const TabsContent = ({ activeTab }) => {
  const classes = useStyles();

  const activePlayers = useSelector(getActivePlayers);
  const boxScoreLoading = useSelector(getBoxScoreLoading);
  const boxScoreError = useSelector(getBoxScoreError);

  const tabContent = () => {
    return tabsGameStats.map(({ id, value, Component }) => {
      return (
        activeTab === value && (
          <div key={id} className={classes.root}>
            {Component}
          </div>
        )
      );
    });
  };

  return (
    <LoadingLayout
      data={activePlayers}
      loading={boxScoreLoading}
      error={boxScoreError}
    >
      {tabContent()}
    </LoadingLayout>
  );
};

export default TabsContent;
