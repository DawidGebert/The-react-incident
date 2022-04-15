import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import Home from './components/Home/Home';
import Passives from './components/Passives/Passives';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import mage from './images/mage.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Router>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h5"><Link to="/">Home</Link></Typography>
        <Typography className={classes.heading} variant="h5"><Link to="/classes">Classes</Link></Typography>
        <Typography className={classes.heading} variant="h5"><Link to="/spells">Spells</Link></Typography>
        <Typography className={classes.heading} variant="h5"><Link to="/passives">Passives</Link></Typography>
        <Typography className={classes.heading} variant="h5"><Link to="/races">Races</Link></Typography>
        <img className={classes.image} src={mage} alt="icon" height="60" />
      </AppBar>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        {/* <Route path="/classes" element={<Classes/>}/>
        <Route path="/spells" element={<Spells/>} />
        <Route path="/passives" element={<Passives/>}/>
        <Route path="/races" element={<Races/>}/> */}
      </Routes>
    </Router>
    </Container>
  );
};

export default App;
