import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Home = ({ setCurrentId }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">Home page</Container>
  );
};

export default Home;
