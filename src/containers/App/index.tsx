import React, { Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { dark, light } from 'theme';
import Spinner from 'common/components/Spinner';
import Header from 'common/components/Header';
import { useStyles } from './styles';
import './index.css';

const getLocalStorageThemeKey = (): string => {
  return localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme')!
    : 'light';
};

export const App = ({ children }) => {
  const classes = useStyles();

  const [theme, setTheme] = useState<string>(getLocalStorageThemeKey());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const appliedTheme: any = createMuiTheme(theme === 'light' ? light : dark);

  const styleBody = {
    backgroundColor: appliedTheme.palette.backgroundBody,
    minHeight: '100vh',
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <div style={styleBody}>
        <Header theme={theme} setTheme={setTheme} />

        <main className={classes.container}>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
};
