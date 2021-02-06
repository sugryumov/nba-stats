import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'types/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    container: {},
    title: {
      padding: '50px 0 30px',
      textAlign: 'center',
      color: theme.palette.primaryColor,

      [theme.breakpoints.down('xs')]: {
        paddingTop: 20,
        fontSize: 24,
      },
    },
  }),
);

export { useStyles };
