import React from 'react';
import { useSelector } from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { CONFERENCE_DIVISION_NAME } from 'common/constants/conferenceDivisionName';
import SVGIcon from 'common/components/SVGIcon';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { getStandingsGroupBy } from 'common/selectors/Standings/getStandings';
import { useStyles } from './styles';

const StandingsTable = ({ data, name }) => {
  const classes = useStyles();

  const standingsGroupBy = useSelector(getStandingsGroupBy);

  const ColumnName = ({ _, render }) => {
    const [teamName, teamNickname, teamTricode, confRank, divRank] = render;

    return (
      <div className={classes.cellTeamWrap}>
        <b className={classes.cellTeamRank}>
          {standingsGroupBy === 'standings_conference' ? confRank : divRank}.
        </b>
        <SVGIcon name={teamTricode} width={30} height={30} />
        <p className={classes.cellTeamName}>
          <Hidden xsDown>{`${teamName} ${teamNickname}`}</Hidden>
          <Hidden smUp>{teamTricode}</Hidden>
        </p>
      </div>
    );
  };

  const ColumnWinLos = ({ _, render }) => {
    return <>{`${render[0]} - ${render[1]}`}</>;
  };

  const columns = [
    {
      id: 1,
      component: ColumnName,
      name: '',
      render: [
        'teamName',
        'teamNickname',
        'teamTricode',
        'confRank',
        'divRank',
      ],
      label: 'TEAM',
    },
    {
      id: 2,
      component: Column,
      name: 'win',
      label: 'W',
    },
    {
      id: 3,
      component: Column,
      name: 'loss',
      label: 'L',
    },
    {
      id: 4,
      component: Column,
      name: 'winPct',
      label: 'WIN%',
    },
    {
      id: 5,
      component: Column,
      name: 'gamesBehind',
      label: 'GB',
    },
    {
      id: 6,
      component: ColumnWinLos,
      render: ['confWin', 'confLoss'],
      name: '',
      label: 'CONF',
    },
    {
      id: 7,
      component: ColumnWinLos,
      render: ['homeWin', 'homeLoss'],
      name: '',
      label: 'HOME',
    },
    {
      id: 8,
      component: ColumnWinLos,
      render: ['awayWin', 'awayLoss'],
      name: '',
      label: 'ROAD',
    },
    {
      id: 9,
      component: ColumnWinLos,
      render: ['lastTenWin', 'lastTenLoss'],
      name: '',
      label: 'LAST 10',
    },
    {
      id: 10,
      component: Column,
      render: ['awayWin', 'awayLoss'],
      name: 'streakText',
      label: 'STREAK',
    },
  ];

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {CONFERENCE_DIVISION_NAME[name]}
        </Typography>
      </Toolbar>

      <div className={classes.table}>
        <ReusableTable data={data} columns={columns} />
      </div>
    </TableContainer>
  );
};

export default StandingsTable;
