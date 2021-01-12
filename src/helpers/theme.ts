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
  link: 'rgba(255, 255, 255, 0.5)',
  activeLink: '#ffffff',
};

export const light: ITheme = {
  ...general,
  palette: {
    type: 'light',
    primaryColor: '#051c2d',
    backgroundHeader: '#1976d2',
    backgroundBody: '#ffffff',
    color: '#ffffff',
  },
};

export const dark: ITheme = {
  ...general,
  palette: {
    type: 'dark',
    primaryColor: '#ffffff',
    backgroundHeader: '#051c2d',
    backgroundBody: '#051c2d',
    color: '#ffffff',
  },
};
