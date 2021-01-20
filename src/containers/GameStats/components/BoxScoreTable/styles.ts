import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      '&:not(:last-child)': {
        marginBottom: 50,
      },
    },
    toolbar: {
      padding: '0 16px',
    },
    title: {
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
    table: {
      overflowX: 'auto',
    },
  }),
);

export { useStyles };
