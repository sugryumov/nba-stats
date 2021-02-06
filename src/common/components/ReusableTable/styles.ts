import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    headTableCell: {
      'padding': 10,
      'fontWeight': 'normal',
      'backgroundColor': theme.palette.secondaryColor,
      'textAlign': 'center',
      'whiteSpace': 'nowrap',
      'userSelect': 'none',

      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },

      '&:first-child': {
        minWidth: 200,
        paddingLeft: 16,
        textAlign: 'left',

        [theme.breakpoints.down('xs')]: {
          position: 'sticky',
          left: 0,
          zIndex: 1,
          minWidth: 94,
          boxShadow: '3px 0 3px -2px rgba(0,0,0,.1)',
        },
      },
    },

    bodyTableCell: {
      'padding': '12px 0',
      'userSelect': 'none',

      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },

      '&:first-child': {
        minWidth: 220,
        color: `${theme.palette.text.primary} !important`,
        paddingLeft: 16,
        paddingRight: 16,
        whiteSpace: 'nowrap',
        textAlign: 'left',

        [theme.breakpoints.down('xs')]: {
          position: 'sticky',
          left: 0,
          zIndex: 1,
          minWidth: 'auto',
          backgroundColor: theme.palette.background?.paper,
          boxShadow: '3px 0 3px -2px rgba(0,0,0,.1)',
        },
      },
    },
  }),
);

export { useStyles };
