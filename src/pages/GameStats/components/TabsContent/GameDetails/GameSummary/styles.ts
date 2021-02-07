import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      alignItems: 'center',
      columnGap: 20,
      overflowX: 'auto',
      marginBottom: 30,
    },
  }),
);

export { useStyles };
