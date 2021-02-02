import React from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { leadersGroupByList } from 'common/constants/leadersGroupByList';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const StatsHeader = ({ groupBy, handleGroupBy }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        '20 - '21 Regular Season Stats
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
          {leadersGroupByList.map(({ id, name, value }) => {
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
