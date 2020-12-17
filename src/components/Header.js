import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    paddingTop: '30px',
    fontFamily: 'Comic Sans MS',
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    paddingTop: '15px',
    fontFamily: 'Comic Sans MS',
    color: 'white',
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();

  return(
    <>
      <div className="parent">
        <div className="header">
          <Container maxWidth="lg">
            <Typography variant="h3" className={classes.title}>
              <Fade left cascade>
                My portfolio
              </Fade>
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              <Fade left cascade>
                <span>This website is built with React</span>
                <span><i class="fab fa-react"></i></span>
              </Fade>
            </Typography>
          </Container>
        </div>
      </div>
    </>
    )
}

export default Header;