import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr 190px',
      alignItems: 'center',
      columnGap: 20,
      overflowX: 'auto',
      marginBottom: 30,
    },
  }),
);

export { useStyles };
