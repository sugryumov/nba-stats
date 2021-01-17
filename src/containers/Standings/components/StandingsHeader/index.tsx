import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { groupByList } from 'containers/Standings/constants';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    padding: 20,
    marginBottom: 32,

    [theme.breakpoints.down('xs')]: {},
  },
  formControl: {
    minWidth: 120,
  },
}));

const StandingsHeader = ({ groupBy, handleGroupBy }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="group-by-select">GROUP BY</InputLabel>
        <Select
          native
          value={groupBy}
          onChange={handleGroupBy}
          label="GROUP BY"
          inputProps={{
            id: 'group-by-select',
          }}
        >
          {groupByList.map(({ id, name, value }) => {
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

export default StandingsHeader;
