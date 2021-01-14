import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/dayjs';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { parseDateFromYMD } from 'helpers/parse';
import { fetchGamesListAction } from 'containers/Games/store/actions';

const GameCalendar = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<string>(parseDateFromYMD());

  const handlerChangeDate = date => {
    const formatDate = parseDateFromYMD(date);
    setSelectedDate(formatDate);

    dispatch(fetchGamesListAction.request(formatDate));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        disableToolbar
        variant="inline"
        value={selectedDate}
        onChange={handlerChangeDate}
      />
    </MuiPickersUtilsProvider>
  );
};

export default GameCalendar;
