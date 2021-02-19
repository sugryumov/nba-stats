import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'block',
      margin: '70px auto',
    },
  }),
);

export { useStyles };
