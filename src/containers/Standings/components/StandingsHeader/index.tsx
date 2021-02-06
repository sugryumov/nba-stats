import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'types/theme';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { groupByList } from 'common/constants/groupByList';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 32,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      fontSize: 16,
    },
  },
  formControl: {
    'minWidth': 150,
    'height': 40,

    '& .MuiInputBase-root': {
      height: 40,
    },

    '& .MuiInputLabel-root': {
      fontSize: 12,
    },

    '& .MuiSelect-select:focus': {
      background: 'transparent',
    },

    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
}));

const StandingsHeader = ({ groupBy, handleGroupBy }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        '20 - '21 Regular Season Standings
      </Typography>

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
