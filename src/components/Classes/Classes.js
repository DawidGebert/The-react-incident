import { Container, Grid} from '@mui/material';
import React from 'react';
import { motion } from "framer-motion";
import ClassCard from './ClassCard';
import * as _ from "lodash";
import classes from "../../constants/classes"
const Classes = ({setCurrentId }) => {
  return (
    <Container maxWidth="lg">
      <div id="movies-list">
			<Container>
				<Grid container spacing={3} component={motion.div} layout>
        {classes.map((cl) => (
						<Grid className = "classCard" xs={4} key={cl.id} component={motion.div} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
