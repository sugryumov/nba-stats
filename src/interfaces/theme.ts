export interface IGeneralStyle {
  maxWidth: string;
  margin: string;
  link: string;
  activeLink: string;
}

export interface ITheme extends IGeneralStyle {
  palette: {
    type: string;
    primaryColor: string;
    backgroundHeader: string;
    backgroundBody: string;
    color: string;
  };
}
