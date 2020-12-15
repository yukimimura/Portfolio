import React from 'react';
import Work from './Work';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 20,
    marginBottom: 50,
    fontFamily: 'Comic Sans MS',
    color: '#3298dc',
    paddingTop: 40,
    fontWeight: 'bold',
  },
}));

const Main = () => {
  const classes = useStyles();

  return(
    <Container maxWidth="lg">
      <Typography variant="h4" className={classes.title}>
      <Fade left cascade>
        Works
        </Fade>
      </Typography>
      <Work />
    </Container>
  )
}

export default Main;