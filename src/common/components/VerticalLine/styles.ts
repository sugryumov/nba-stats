import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    line: {
      minWidth: 1,
      height: 100,
      backgroundColor: theme.palette.secondaryColor,
    },
  }),
);

export { useStyles };
