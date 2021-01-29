import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    message: {
      marginTop: 15,
      color: theme.palette.primaryColor,
    },
    icon: {
      fontSize: 45,
      color: theme.palette.primaryColor,
    },
  }),
);

export { useStyles };
