import dayjs from 'dayjs';

export const parseDateFromYMD = (date?) => {
  return dayjs(date).format('YYYYMMDD');
};
