import { Container, Grid, Typography} from '@mui/material';
import React from 'react';
import { motion } from "framer-motion";
import * as _ from "lodash";
const ClassCard = ({cl}) => {
  return (
    <Container maxWidth="lg">
			<Typography style={{ fontWeight: 600 }} className='center'>{cl.name}</Typography>
      <Typography>{cl.description}</Typography>
    </Container>
  );
};

export default ClassCard;
