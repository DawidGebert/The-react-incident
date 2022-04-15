import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Passives = ({ setCurrentId }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">Passives page</Container>
  );
};

export default Passives;
