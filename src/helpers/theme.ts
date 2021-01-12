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
    type: 'light',
    primaryColor: '#1a1a1a',
    secondaryColor: '#1976d2',
    backgroundHeader: '#1976d2',
    backgroundBody: '#f7f7f7',
    textColor: '#1a1a1a',
    linkColor: 'rgba(255, 255, 255, 0.5)',
    activeLinkColor: '#ffffff',
  },
};

export const dark: ITheme = {
  ...general,
  palette: {
    type: 'dark',
    primaryColor: '#f7f7f7',
    secondaryColor: '#1976d2',
    backgroundHeader: '#212121',
    backgroundBody: '#1a1a1a',
    textColor: '#f7f7f7',
    linkColor: 'rgba(255, 255, 255, 0.5)',
    activeLinkColor: '#ffffff',
  },
};
