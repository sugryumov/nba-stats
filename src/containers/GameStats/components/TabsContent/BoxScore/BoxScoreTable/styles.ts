import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
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
      'overflowX': 'auto',

      '& .MuiTableRow-root:last-child': {
        '& .MuiTableCell-body': {
          color: `${theme.palette.primary.main} !important`,
          fontWeight: 'bold',
        },
      },
    },
  }),
);

export { useStyles };
