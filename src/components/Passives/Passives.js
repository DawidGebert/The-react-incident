import { Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

const Passives = ({ setCurrentId }) => {

  return (
    <Container maxWidth="lg">
      <Typography variant='h5'>PASSIVES</Typography>
      Umiejętności pasywne postaci(pozytywne lub negatywne):<br/>
      <List color="primary">
        <ListItem button>swift: +10 jednostek ruchu</ListItem>
        <ListItem button>true strike: raz na dzień można użyć umiejki jakiejś</ListItem>
        <ListItem button>magic aware: biernie wyczuwasz magię i możesz analizować czary</ListItem>
        <ListItem button>quick reflexes: jeśli ktoś nie trafi cie z bliska, możesz wyprowadzić kontrę(raz na turę)</ListItem>
        <ListItem button>lockpick mastery: +7 do rzutów o otwarcie zamka</ListItem>
        <ListItem button>(weapon)apprentice: low boost to a weapon</ListItem>
        <ListItem button>(weapon)veteran: mid boost to a weapon</ListItem>
        <ListItem button>(weapon)master: high boost to a weapon</ListItem>
        <ListItem button>(magic school)apprentice: low boost to a magic type</ListItem>
        <ListItem button>(magic school)veteran: mid boost to a magic type</ListItem>
        <ListItem button>(magic school)master: high boost to a magic type</ListItem>
        <ListItem button>and so on...</ListItem>
      </List>
    </Container>
  );
};

export default Passives;
