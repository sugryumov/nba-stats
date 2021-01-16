import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DateFnsUtils from '@date-io/dayjs';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import EventIcon from '@material-ui/icons/Event';
import { parseDateFromYMD } from 'helpers/parse';
import { getChangedDate } from 'common/selectors/Games/gamesList';
import { changedGameDateAction } from 'containers/Games/store/actions';

const GameCalendar = ({ styles }) => {
  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);

  const handlerChangeDate = date => {
    const formatDate = parseDateFromYMD(date);

    dispatch(changedGameDateAction(formatDate));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={styles.calendarWrap}>
        <DatePicker
          autoOk
          disableToolbar
          variant="inline"
          value={changedDate}
          onChange={handlerChangeDate}
          className={styles.calendar}
        />
        <EventIcon className={styles.icon} />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default GameCalendar;
