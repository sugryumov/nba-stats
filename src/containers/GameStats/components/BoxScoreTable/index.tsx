import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import Table from '@material-ui/core/Table';
import BoxScoreTableBody from './BoxScoreTableBody';
import BoxScoreTableHead from './BoxScoreTableHead';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

const BoxScoreTable = ({ data, team }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {team}
        </Typography>
      </Toolbar>

      <div className={classes.table}>
        <Table aria-label="caption table">
          <BoxScoreTableHead />
          <BoxScoreTableBody data={data} />
        </Table>
      </div>
    </TableContainer>
  );
};

export default BoxScoreTable;
