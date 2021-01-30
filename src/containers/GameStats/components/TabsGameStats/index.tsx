import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { tabsGameStats } from 'common/constants/tabsGameStats';
import { useStyles } from './styles';

const TabsGameStats = ({ handleTabClick, activeTab }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tabs}
        value={activeTab}
        onChange={handleTabClick}
        TabIndicatorProps={{ className: classes.indicator }}
      >
        {tabsGameStats.map(({ id, value, label }) => {
          return (
            <Tab className={classes.tab} key={id} value={value} label={label} />
          );
        })}
      </Tabs>
    </Paper>
  );
};

export default TabsGameStats;
