export interface IGeneralStyle {
  maxWidth: string;
  margin: string;
  whiteColor: string;
  redColor: string;
}

export interface ITheme extends IGeneralStyle {
  palette: {
    primary: { main: string };
    background?: { paper: string; default: string };
    text: { primary: string };
    type: 'light' | 'dark';
    primaryColor: string;
    backgroundHeader: string;
    secondaryColor: string;
    linkColor: string;
  };

  breakpoints?: any;
}
