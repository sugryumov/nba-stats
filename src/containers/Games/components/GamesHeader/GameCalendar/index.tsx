import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/dayjs';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import EventIcon from '@material-ui/icons/Event';
import { parseDateFromYMD } from 'helpers/parse';
import { fetchGamesListAction } from 'containers/Games/store/actions';

const GameCalendar = ({ styles }) => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<string>(parseDateFromYMD());

  const handlerChangeDate = date => {
    const formatDate = parseDateFromYMD(date);
    setSelectedDate(formatDate);

    dispatch(fetchGamesListAction.request(formatDate));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={styles.calendarWrap}>
        <DatePicker
          autoOk
          disableToolbar
          variant="inline"
          value={selectedDate}
          onChange={handlerChangeDate}
          className={styles.calendar}
        />
        <EventIcon className={styles.icon} />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default GameCalendar;
