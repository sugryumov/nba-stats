export interface IGeneralStyle {
  maxWidth: string;
  margin: string;
}

export interface ITheme extends IGeneralStyle {
  palette: {
    primary: { main: string };
    background?: { paper: string };
    text: { primary: string };
    type: 'light' | 'dark';
    primaryColor: string;
    backgroundHeader: string;
    backgroundBody: string;
    linkColor: string;
    activeLinkColor: string;
  };

  breakpoints?: any;
}
