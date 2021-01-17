import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ConfDivName } from 'enums/confDivName';
import { ITheme } from 'interfaces/theme';
import StandingsTableHead from './StandingsTableHead';
import StandingsTableBody from './StandingsTableBody';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    '&:not(:last-child)': {
      marginBottom: 50,
    },
  },
  toolbar: {
    padding: '0 16px',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  table: {
    overflowX: 'auto',
  },
}));

const StandingsTable = ({ data, name }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {ConfDivName[name]}
        </Typography>
      </Toolbar>

      <div className={classes.table}>
        <Table aria-label="caption table">
          <StandingsTableHead />
          <StandingsTableBody data={data} />
        </Table>
      </div>
    </TableContainer>
  );
};

export default StandingsTable;
