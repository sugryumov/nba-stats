import dayjs from 'dayjs';

export const parseDateFromYMD = (date?) => {
  return dayjs(date).format('YYYYMMDD');
};

export const countdownToDate = (date: string): number => {
  const finishDate = dayjs(date);
  const currentDate = dayjs();

  return finishDate.diff(currentDate);
};
