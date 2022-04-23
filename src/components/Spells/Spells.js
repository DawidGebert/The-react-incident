import { Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

const Spells = ({ setCurrentId }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant='h5'>SPELLS</Typography>
      Uznałem, że rzucania spelli bedzie potrzebna mana, lista zaklęć(koszt many):<br/>
      <List color="primary">
        <ListItem button>detect magic(6): for 10 minutes you can see traces of magic</ListItem>
        <ListItem button>magic berries(5): summons 3 berries (each one of them is enough to feed a person for a day)</ListItem>
        <ListItem button>minute illusion(1): summons a small illusion that is max the size of a head, it can move</ListItem>
        <ListItem button>minute telekinizis(1): can move small or light things with your mind, open windows, close doors, pull levers</ListItem>
        <ListItem button>magic hand(1): summons a magic hand for 1 min, it can carry and do stuff, it can't deal direct damage</ListItem>
        <ListItem button>spark(0): deals 1 dmg, always hits, very big range, low chance to ignite</ListItem>
        <ListItem button>mana bolt(1): low magic dmg</ListItem>
        <ListItem button>firebolt(2): low fire dmg, low chance to ignite</ListItem>
        <ListItem button>ice shard(2): low ice dmg, can slow</ListItem>
        <ListItem button>stone pebble(3): 3 shots of low physical dmg</ListItem>
        <ListItem button>toxic shot(5): low poison dmg, on hit, leaves a small poison cloud, can poison enemies</ListItem>
        <ListItem button>poison spray(7): dmg in a cone, close range, high dmg at close distance</ListItem>
        <ListItem button>fireball!(10): mid fire dmg, on hit creates and explosion dealing mid fire dmg, the explosion part can be evaded</ListItem>
        <ListItem button>And so on...</ListItem>
      </List>
    </Container>
  );
};

export default Spells;
