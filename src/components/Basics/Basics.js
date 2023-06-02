import { Container, Typography, List, ListItem } from '@mui/material';
import React from 'react';
import ScrollArea from 'react-scrollbar';

const Basics = ({ setCurrentId }) => {

  return (
    <Container maxWidth="lg">
      <ScrollArea>
      <Typography variant='h5'>Co to jest DnD?</Typography><br/>
      DnD 5e (Dundeons and Dragons) to gra TTRPG (TableTop Role Playing Game). Oznacza to, że z założenia wcielamy się w jakąś postać i przeżywamy przygody.<br/>
      <br/>
      DM (Dungeon Master) to wszechmocny stwórca świata w którym grają gracze. Tworzy historie, opowiada co się dzieje i ma władzę nad zasadami.
      Gracze mówią co robią, a DM opisuje tego skutki. Dzięki otrzymujemy wyjątkowe połączenie gdzie DM opowiada historię, a Gracze mają całkowitą władzę nad swoimi
      czynnościami, co zmusza DM'a do improwizowania wyników działań Graczy.<br/>
      <br/>
      <Typography variant='h5'>Kości</Typography><br/>
      <br/>
      W DnD znajdują się kostki: d4, d6, d8, d10, d12, d20<br/>
      <br/>
      Najważniejszą ze wszytkich jest d20, którą rzuca się by zobaczyć czy Graczowi udaje się coś zrobić np:<br/>
      - trafić przeciwnika<br/>
      - użyć swojej wiedzy<br/>
      - wykonać jakąś trudną czynność<br/>
      - namówić lub oszukać NPC<br/>
      <br/>
      Kości d4, d6, d8, d10, d12 używane są zazwyczaj by ustalić wartość czegoś w grze np:<br/>
      - ilość obrażeń<br/>
      - ilość leczenia<br/>
      - ilość punktów zdrowia postaci<br/>
      <br/>
      <Typography variant='h5'>Karta Gracza</Typography><br/>
      </ScrollArea>
    </Container>
  );
};

export default Basics;