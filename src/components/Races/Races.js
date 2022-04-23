import { Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

const Races = ({ setCurrentId }) => {

  return (
    <Container maxWidth="lg">
      <Typography variant='h5'>RACES</Typography>
      Rasy graczy lub NPC:<br/>
      <List color="primary">
        <ListItem button>Human (może dostawać na przykład +1 do każdej staty</ListItem>
        <ListItem button>PółElf (+1 do dwóch wybranych stat i 1 darmowa pasywka do wyboru) (</ListItem>
        <ListItem button>Wood Elf (+1 Dex +1 Wis, skill wzmocnienie łucznictwa i wiedza o naturze)</ListItem>
        <ListItem button>High Elf (+1 Int +1 Char, skill związany z maną i jakiś buff do spelli i debuff do ataku wręcz)</ListItem>
        <ListItem button>Ancient Droid(pół-człowiek-pół-maszyna, specjalny system magii, ulepszenia ciała wraz z levelami)</ListItem>
        <ListItem button>Dwarf (...)</ListItem>
        <ListItem button>Tabaxi (kot-człowiek)</ListItem>
        <ListItem button>Gnome (taki hobbit)</ListItem>
        <ListItem button>Drakonid (smok-człowiek)</ListItem>
        <ListItem button>And so on...</ListItem>
      </List>
    </Container>
  );
};

export default Races;
