import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { dark, light } from 'theme';
import Header from 'common/components/Header';

const getLocalStorageThemeKey = (): string => {
  return localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme')!
    : 'light';
};

type TApp = {
  children: React.ReactNode;
};

export const App = ({ children }: TApp) => {
  const [theme, setTheme] = useState<string>(getLocalStorageThemeKey());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const appliedTheme: any = createMuiTheme(theme === 'light' ? light : dark);

  const styleContainer = {
    maxWidth: appliedTheme.maxWidth,
    margin: appliedTheme.margin,
    padding: '0 16px 40px',
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Header theme={theme} setTheme={setTheme} />

      <main style={styleContainer}>{children}</main>
    </ThemeProvider>
  );
};
