import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { dark, light } from 'helpers/theme';
import Header from 'containers/Header';
import Content from 'common/components/Content';
import './index.css';

const getLocalStorageThemeKey = (): string => {
  return localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme')!
    : 'light';
};

function App() {
  const [theme, setTheme] = useState<string>(getLocalStorageThemeKey());

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const appliedTheme: any = createMuiTheme(theme === 'light' ? light : dark);

  const styleBody = {
    backgroundColor: appliedTheme.palette.backgroundBody,
    minHeight: '100vh',
  };

  const styleContainer = {
    maxWidth: appliedTheme.maxWidth,
    margin: appliedTheme.margin,
    padding: '0 16px',
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <div style={styleBody}>
        <Header theme={theme} setTheme={setTheme} />

        <div style={styleContainer}>
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
