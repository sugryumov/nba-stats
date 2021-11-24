import React, { useState } from 'react';
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
import { getStandingsTeamGroupBy } from 'common/selectors/Standings/standingsTeam';
import ScheduleTeamModal from './ScheduleTeamModal';
import { useStyles } from './styles';

const StandingsTable = ({ data, name }) => {
  const classes = useStyles();

  const standingsGroupBy = useSelector(getStandingsTeamGroupBy);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentTeamId, setCurrentTeamId] = useState<string | null>(null);
  const [currentTeamName, setCurrentTeamName] = useState<string | null>(null);

  const teamScheduleHandler = (teamId: string, teamName: string) => {
    setOpenModal(true);
    setCurrentTeamId(teamId);
    setCurrentTeamName(teamName);
  };

  const ColumnName = ({ _, render }) => {
    const [
      teamId,
      teamName,
      teamNickname,
      teamTricode,
      confRank,
      divRank,
      rank,
    ] = render;

    const fullTeamName = `${teamName} ${teamNickname}`;

    return (
      <div
        className={classes.cellTeamWrap}
        onClick={() => teamScheduleHandler(teamId, fullTeamName)}
      >
        <b className={classes.cellTeamRank}>
          {standingsGroupBy === 'standings_conference'
            ? confRank
            : standingsGroupBy === 'standings_division'
              ? divRank
              : rank}
          .
        </b>
        <SVGIcon name={teamTricode} width={30} height={30} />
        <p className={classes.cellTeamName}>
          <Hidden xsDown>{fullTeamName}</Hidden>
          <Hidden smUp>{teamTricode}</Hidden>
        </p>
      </div>
    );
  };

  const ColumnWinLos = ({ _, render }) => {
    const [winGame, lossGame] = render;

    return `${winGame} - ${lossGame}`;
  };

  const ColumnStreak = ({ _, render }) => {
    const [streakLine, isWinStreak] = render;

    return isWinStreak ? `W ${streakLine}` : `L ${streakLine}`;
  };

  const columns = [
    {
      id: 1,
      component: ColumnName,
      name: '',
      render: [
        'teamId',
        'teamName',
        'teamNickname',
        'teamTricode',
        'confRank',
        'divRank',
        'rank',
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
      component: ColumnStreak,
      render: ['streak', 'isWinStreak'],
      name: '',
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

      <div
        className={
          standingsGroupBy === 'standings_all'
            ? classes.tableAll
            : classes.table
        }
      >
        <ReusableTable data={data} columns={columns} />
      </div>

      <ScheduleTeamModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentTeamId={currentTeamId}
        currentTeamName={currentTeamName}
      />
    </TableContainer>
  );
};

export default StandingsTable;
