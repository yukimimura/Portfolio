import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    marginTop: 30,
    padding: '30px 0',
    fontFamily: 'Comic Sans MS',
    color: '#3298dc',
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();

  return(
    <Container maxWidth="lg">
      <Typography variant="h4" className={classes.title}>
        <Fade left cascade>
          Profile
        </Fade>
      </Typography>
    </Container>
    )
}

export default Header;