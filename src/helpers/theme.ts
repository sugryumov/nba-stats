import { ITheme, IGeneralStyle } from 'interfaces/theme';

export const colors = [
  '#2979FF',
  '#FF9100',
  '#9b59b6',
  '#12CBC4',
  '#34495e',
  '#ED4C67',
  '#05c46b',
];

const general: IGeneralStyle = {
  maxWidth: '1320px',
  margin: '0 auto',
};

export const light: ITheme = {
  ...general,
  palette: {
    primary: { main: '#2979ff' },
    text: {
      primary: '#1a1a1a',
    },
    type: 'light',
    primaryColor: '#1a1a1a',
    secondaryColor: '#e4e4e4',
    backgroundHeader: '#1976d2',
    backgroundBody: '#f7f7f7',
    linkColor: '#fff9',
    activeLinkColor: '#ffffff',
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
      paper: '#212121',
    },
    type: 'dark',
    primaryColor: '#f7f7f7',
    secondaryColor: '#424242',
    backgroundHeader: '#212121',
    backgroundBody: '#1a1a1a',
    linkColor: '#fff9',
    activeLinkColor: '#ffffff',
  },
};
