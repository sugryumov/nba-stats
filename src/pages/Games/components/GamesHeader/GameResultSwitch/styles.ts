import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
      },
    },
    switch: {
      marginBottom: 3,
    },
  }),
);

export { useStyles };
