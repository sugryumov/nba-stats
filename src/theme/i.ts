export interface IGeneralStyle {
  maxWidth: string;
  margin: string;
  whiteColor: string;
  redColor: string;
}

export interface ITheme extends IGeneralStyle {
  palette: {
    primary: { main: string };
    background?: { paper: string };
    text: { primary: string };
    type: 'light' | 'dark';
    primaryColor: string;
    secondaryColor: string;
    backgroundHeader: string;
    backgroundBody: string;
    linkColor: string;
  };

  breakpoints?: any;
}
