import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Classes = ({ setCurrentId }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">Classes page</Container>
  );
};

export default Classes;
