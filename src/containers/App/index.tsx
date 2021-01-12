import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { dark, light } from 'helpers/theme';
import Header from 'containers/Header';
import Content from 'common/components/Content';
import './index.css';

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  const appliedTheme: any = createMuiTheme(theme ? (light as any) : dark);

  const styleBody = {
    backgroundColor: appliedTheme.palette.backgroundBody,
    paddingBottom: '100px',
  };

  const styleContainer = {
    maxWidth: appliedTheme.maxWidth,
    margin: appliedTheme.margin,
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
