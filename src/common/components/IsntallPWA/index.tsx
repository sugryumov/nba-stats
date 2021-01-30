import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';

const InstallPWA = () => {
  const classes = useStyles();

  const [supportsPWA, setSupportsPWA] = useState<boolean>(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('transitionend', handler);
  }, []);

  const onClickHandler = event => {
    event.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }
  return (
    <Button
      title="Install PWA"
      onClick={onClickHandler}
      color="default"
      className={classes.button}
    >
      Install PWA
    </Button>
  );
};

export default InstallPWA;
