import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'types/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    button: {
      marginRight: 10,
      color: theme.whiteColor,
    },
  }),
);

export { useStyles };
