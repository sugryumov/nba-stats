import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { countdownToDate } from 'helpers/parse';

const CountdownToDate = () => {
  const [timeBeforeStart, setTimeBeforeStart] = React.useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const result = countdownToDate('2021-10-20 02:30');

      setTimeBeforeStart(result);
    }, 1000);

    if (timeBeforeStart < 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeBeforeStart]);

  return <div>{dayjs(timeBeforeStart).format('DD HH:mm:ss')}</div>;
};

export default CountdownToDate;
