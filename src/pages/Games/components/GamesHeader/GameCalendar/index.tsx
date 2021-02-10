import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DateFnsUtils from '@date-io/dayjs';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import EventIcon from '@material-ui/icons/Event';
import { parseDateFromYMD } from 'helpers/parse';
import { getChangedDate } from 'common/selectors/Games';
import { changedGameDate } from 'pages/Games/store';
import { useStyles } from './styles';

const GameCalendar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);

  const handlerChangeDate = date => {
    const formatDate = parseDateFromYMD(date);

    dispatch(changedGameDate(formatDate));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.root}>
        <DatePicker
          autoOk
          disableToolbar
          variant="inline"
          value={changedDate}
          onChange={handlerChangeDate}
          className={classes.picker}
        />
        <EventIcon className={classes.icon} />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default GameCalendar;
