import { Container, Grid} from '@mui/material';
import React from 'react';
import { motion } from "framer-motion";
import * as _ from "lodash";
const ClassCard = ({cl}) => {
  const movies = [{id: 1, title: "hello"},"","","","","",""]
  return (
    <Container className='center' maxWidth="lg">
      <div id="movies-list">
			<Container>
				{cl.name}
			</Container>
      {cl.description}
		</div>
    </Container>
  );
};

export default ClassCard;
