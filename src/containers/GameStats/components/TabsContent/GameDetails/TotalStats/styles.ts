import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      'marginTop': 30,
      'overflowX': 'auto',

      '& .MuiTableCell-head': {
        backgroundColor: `${theme.palette.background?.paper} !important`,
      },
    },
  }),
);

export { useStyles };
