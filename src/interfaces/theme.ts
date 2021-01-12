export interface IGeneralStyle {
  maxWidth: string;
  margin: string;
}

export interface ITheme extends IGeneralStyle {
  palette: {
    type: 'light' | 'dark';
    primaryColor: string;
    secondaryColor: string;
    backgroundHeader: string;
    backgroundBody: string;
    textColor: string;
    linkColor: string;
    activeLinkColor: string;
  };
}
