import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Races = ({ setCurrentId }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">Races page</Container>
  );
};

export default Races;
