import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { GROUP_BY_LEADERS } from 'common/constants/groupByLeaders';
import { getStatsData } from 'common/selectors/Stats';
import { useStyles } from './styles';

const StatsHeader = ({ groupBy, handleGroupBy }) => {
  const classes = useStyles();

  const statsData = useSelector(getStatsData);
  const updateDate = statsData?.last_updated
    ? dayjs(statsData?.last_updated).format('DD.MM.YYYY')
    : '-';

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        '20 - '21 Regular Season Stats
        <p className={classes.subtitle}>Last update: {updateDate}</p>
      </Typography>

      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          value={groupBy}
          onChange={handleGroupBy}
          inputProps={{
            id: 'group-by-select',
          }}
        >
          {GROUP_BY_LEADERS.map(({ id, name, value }) => {
            return (
              <option key={id} value={value}>
                {name}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default StatsHeader;
