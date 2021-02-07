import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
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
