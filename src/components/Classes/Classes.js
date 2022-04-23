import { Container, List, ListItem, Typography } from '@mui/material';
import React from 'react';

const Classes = ({ setCurrentId }) => {

  return (
    <Container maxWidth="lg">
      <Typography variant='h5'>CLASSES</Typography>
      Clasy graczy lub NPC:<br/>
      <List color="primary">
        <ListItem button>Barbarian (szał, dobry w zwarciu, ma potężne nerfy do magi)</ListItem>
        <ListItem button>Fighter (wybierasz se bronie i jesteś w nich mistrzem, bardzo wszechstronny) </ListItem>
        <ListItem button>Paladin (Fighter + nie tak wszechstronny, ale ma magie!)</ListItem>
        <ListItem button>Clerik (utility, leczenie, buffy, no i czasami uderzy z nieba słupem światła)</ListItem>
        <ListItem button>Wizard (może wymasterować szkoły magii i łatwo sie uczy zaklęć i potrafi ze zregenerować mane)</ListItem>
        <ListItem button>Sorcerer (Potężne i customizowalne zaklęcia ale trudno sie uczy i ma mniej many)</ListItem>
        <ListItem button>Artificer (Typowy majsterkowicz, golemy, alchemia, zaklęte bronie)</ListItem>
        <ListItem button>Warlock (mroczny mag, potrafi sie ranić i dostawać manę, ale i posiada life steal, ogólnie pakt z demonami)</ListItem>
        <ListItem button>Druid (buffy, leczenie, potrafi sie zamieniać w zwierzęta, magia lasu)</ListItem>
        <ListItem button>Bard (buffy, leczenie, debuffy, iluzja, po prostu zadymiarz)</ListItem>
        <ListItem button>Rouge (zabójca, zwinne rączki i nóżki, dużo skillów)</ListItem>
        <ListItem button>Monk (zwinny, bez broni i zbroi buffy, energia ki + mana = extra cool)</ListItem>
        <ListItem button>każda klasa jeszcze bedzie miała milion podklas, bez obaw(typu shadow monk lub celestial warlok)</ListItem>
      </List>
    </Container>
  );
};

export default Classes;
