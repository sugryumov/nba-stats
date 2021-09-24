export const getTimeRemaining = (
  countDownDate: Date,
): { difference: number; time: { [key: string]: string } } => {
  const currentDate: Date = new Date();
  const difference = countDownDate.getTime() - currentDate.getTime();

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const time = prepareTime({ days, hours, minutes, seconds });

  return {
    difference,
    time,
  };
};

const prepareTime = (time: { [key: string]: number }) => {
  const days = ('0' + time.days).slice(-2);
  const hours = ('0' + time.hours).slice(-2);
  const minutes = ('0' + time.minutes).slice(-2);
  const seconds = ('0' + time.seconds).slice(-2);

  return { days, hours, minutes, seconds };
};
