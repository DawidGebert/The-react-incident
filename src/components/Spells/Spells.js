import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Spells = ({ setCurrentId }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">Spells page</Container>
  );
};

export default Spells;
