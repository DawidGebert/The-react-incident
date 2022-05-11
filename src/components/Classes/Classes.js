import { Container, Grid} from '@mui/material';
import React from 'react';
import { motion } from "framer-motion";
import ClassCard from './ClassCard';
import * as _ from "lodash";
import classes from "../../constants/classes"
const Classes = ({setCurrentId }) => {
  // const classes = [{id: 0, title: "hello"},
  // {id: 1, title: "hello"},
  // {id: 2, title: "hello"},
  // {id: 3, title: "hello"},
  // {id: 4, title: "hello"},
  // {id: 5, title: "hello"},
  // {id: 6, title: "hello"}]
  return (
    <Container maxWidth="lg">
      {/* <Typography variant='h5'>CLASSES</Typography>
      Clasy graczy lub NPC:<br/>
      <List color="primary">
        <ListItem button>Barbarian (szał, dobry w zwarciu, ma potężne nerfy do magi)</ListItem>
        <ListItem button>Fighter (wybierasz se bronie i jesteś w nich mistrzem, bardzo wszechstronny) </ListItem>
        <ListItem button>Clerik (utility, leczenie, buffy, no i czasami uderzy z nieba słupem światła)</ListItem>
        <ListItem button>Wizard (może wymasterować szkoły magii i łatwo sie uczy zaklęć i potrafi ze zregenerować mane)</ListItem>
        <ListItem button>Artificer (Typowy majsterkowicz, golemy, alchemia, zaklęte bronie)</ListItem>
        <ListItem button>Warlock (mroczny mag, potrafi sie ranić i dostawać manę, ale i posiada life steal, ogólnie pakt z demonami)</ListItem>
        <ListItem button>Druid (buffy, leczenie, potrafi sie zamieniać w zwierzęta, magia lasu)</ListItem>
        <ListItem button>Bard (buffy, leczenie, debuffy, iluzja, po prostu zadymiarz)</ListItem>
        <ListItem button>Rouge (zabójca, zwinne rączki i nóżki, dużo skillów)</ListItem>
        <ListItem button>Monk (zwinny, bez broni i zbroi buffy, energia ki + mana = extra cool)</ListItem>
        <ListItem button>każda klasa jeszcze bedzie miała milion podklas, bez obaw(typu shadow monk lub celestial warlok)</ListItem>
      </List> */}
      <div id="movies-list">
			<Container>
				<Grid container spacing={2} component={motion.div} layout>
        {classes.map((cl) => (
						<Grid item className = "classCard" xs={4} md="auto" key={cl.id} component={motion.div} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
							<ClassCard cl={cl}/>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
    </Container>
  );
};

export default Classes;
