import React from 'react';
import { useStyles } from './styles';

const VerticalLine = () => {
  const classes = useStyles();

  return <div className={classes.line}></div>;
};

export default VerticalLine;
