import { Container, Typography, List, ListItem } from '@mui/material';
import React from 'react';

const Home = ({ setCurrentId }) => {

  return (
    <Container maxWidth="lg">
      <Typography variant='h5'>Co to za strona?</Typography>
      To moja wiki dla graczy DnD!
      Jest stworzona z dwóch głównych powodów: <br/>
      - uproszczenie zasad by były łatwiej zrozumiałe <br/>
      - przetłumaczenie na polski, bo wszystkie książki DnD są po angielsku <br/>
    </Container>
  );
};

export default Home;
