import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import w from './images/wantedly.png';
import { makeStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  contact: {
    marginBottom: 0,
  },
  wan: {
    paddingTop: 30,
    width: "30px",
  },
  message: {
    marginBottom: 100,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Typography>
        <Box textAlign="center" m={8} fontWeight="fontWeightBold" fontSize={30} className={classes.contact}>
          Contact<br/>
          <Fade top cascade>
          <div className="buttons">
            <h4 class="button"><a href="mailto: perusona5excuse@yahoo.co.jp" class="btn-circle-fishy"><i class="far fa-envelope"></i></a></h4>
            <h4 class="button"><a href="https://www.wantedly.com/secret_profiles/eM-bO62y5iyXrVbh4XtbxK96ijJc2XXA" target="blank" class="btn-circle-fishy"><img src={w} alt="" className={classes.wan}/></a></h4>
            <h2 class="button"><a href="https://github.com/yukimimura?tab=repositories" target="blank" class="btn-circle-fishy"><i class="fab fa-github"></i></a></h2>
          </div>
          </Fade>
        </Box>
        <Box textAlign="center" className={classes.message} fontWeight="fontWeightBold" fontSize={18}>
          Feel free to contact me.
        </Box>
      </Typography>
    </>
  )
}

export default Footer;