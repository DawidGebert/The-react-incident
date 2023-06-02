import { Container, Typography, List, ListItem } from '@mui/material';
import React from 'react';

const Home = ({ setCurrentId }) => {

  return (
    <Container maxWidth="lg">
      <Typography variant='h5'>HOME</Typography>
      Statystyki postaci będą zawierały:<br/>
      <List color="primary">
        <ListItem button>-staty "stałe" typu: strength, dexterity, vitality, wisdom, inteligence, charisma</ListItem>
        <ListItem button>-staty "zmienne" typu: Inicjatywa w walce, szansa na wykonanie jakiejkolwiek akcji(persfazja, wytrzymanie pod wodą), mobilność, obrona fizyczna i magiczna</ListItem>
      </List>
      Fajnie też ogarnąć jakie rzeczy dodać na tą strone, czy lista itemów jest warta dodawania itp.<br/>
    </Container>
  );
};

export default Home;
