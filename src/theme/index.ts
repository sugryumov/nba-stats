import { ITheme } from 'theme/i';

export const colors = [
  '#2979FF',
  '#FF9100',
  '#9b59b6',
  '#12CBC4',
  '#34495e',
  '#ED4C67',
  '#05c46b',
];

const general = {
  maxWidth: '1350px',
  margin: '0 auto',
  whiteColor: '#ffffff',
  redColor: 'crimson',

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Rajdhani',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html': {
          overflowX: 'hidden',
          marginRight: 'calc(-1 * (100vw - 100%))',
        },

        'body': {
          paddingRight: '0 !important',
          lineHeight: 'inherit',
        },

        'p': {
          margin: 0,
        },

        'a': {
          textDecoration: 'none',
        },

        'ul': {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },

        '.block-center': {
          padding: '50px 0',
          textAlign: 'center',
        },
      },
    },
  },
};

export const light: ITheme = {
  ...general,
  palette: {
    primary: { main: '#2979ff' },
    text: {
      primary: '#1a1a1a',
    },
    background: {
      default: '#f7f7f7',
      paper: '#ffffff',
    },
    type: 'light',
    primaryColor: '#1a1a1a',
    backgroundHeader: '#1976d2',
    secondaryColor: '#e4e4e4',
    linkColor: '#ffffff',
  },
};

export const dark: ITheme = {
  ...general,
  palette: {
    primary: { main: '#2979ff' },
    text: {
      primary: '#f7f7f7',
    },
    background: {
      default: '#1a1a1a',
      paper: '#212121',
    },
    type: 'dark',
    primaryColor: '#f7f7f7',
    backgroundHeader: '#212121',
    secondaryColor: '#424242',
    linkColor: '#ffffff',
  },
};
