import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
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
      'overflowX': 'auto',

      '& .MuiTableRow-root': {
        '&:nth-child(6)': {
          '& .MuiTableCell-root': {
            borderBottom: `2px solid ${theme.palette.text.primary}`,
          },
        },
        '&:nth-child(10)': {
          '& .MuiTableCell-root': {
            borderBottom: `2px dashed ${theme.palette.text.primary}`,
          },
        },
      },
    },
    tableAll: {
      overflowX: 'auto',
    },
    cellTeamWrap: {
      'display': 'flex',
      'alignItems': 'center',
      'cursor': 'pointer',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
    cellTeamRank: {
      width: 20,
      marginRight: 5,
    },
    cellTeamName: {
      margin: '0 0 0 5px',
    },
  }),
);

export { useStyles };
