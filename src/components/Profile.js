import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Fade from 'react-reveal/Fade';

import me from './images/me.jpg';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    marginTop: 30,
    padding: '30px 0',
    fontFamily: 'Comic Sans MS',
    color: '#3298dc',
    fontWeight: 'bold',
  },
  hoge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '130px',
    height: '130px',
    border: 'solid #EEEEEE',
    borderRadius: '50%',
  },
  bluebutton: {
    margin: '5px 3px',
    color: '#3298dc',
  },
  button: {
    margin: '5px 3px',
  },
  typography: {
    marginTop: 20,
  },
  ptypo: {
    margin: 0,
    fontWeight: 'bold',
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.title}>
          <Fade left cascade>
            Profile
          </Fade>
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} sm={5} className={classes.hoge}>
            <img src={me} className={classes.image} alt=""/>
            <Typography className={classes.typography}>
              <Fade left cascade>
                <p className={classes.ptypo}>▼ Profile</p>
                <span>Name : 三村友幾</span><br />
                <span>Birth : 1995/8/4</span><br/>
                <span>Address : 広島</span>
              </Fade>
            </Typography>
            <Typography className={classes.typography}>
              <Fade left cascade>
                <p className={classes.ptypo}>▼ Skills</p>
                <span>TOEIC 910点</span><br/>
                <span>証券外務員一種</span>
              </Fade>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography className={classes.typography}>
              <Fade left cascade>
                <p className={classes.ptypo}>▼ Education</p>
                <span>2014~2019 広島修道大学 英語英文学科</span><br />
                <span>2016~2017 クライストチャーチ工科大学 (一年間のNZ留学)</span><br/>
                <span>2020/2~/6 テックアカデミー (バックエンドコース)</span>
              </Fade>
            </Typography>
            <Typography className={classes.typography}>
            <Fade left cascade>
              <p className={classes.ptypo}>▼ Career</p>
              <span>2019 ~</span><br/>
              <span>新卒で広島銀行に入行し、金融商品の営業業務を経験。</span><br/>
              <span>その後株式会社KDDIエボルバに転職し、カスタマーサポートを担当。</span><br/>
              <span>現在はWEBエンジニアを目指し転職活動中。</span>
              </Fade>
            </Typography>
            <Typography className={classes.typography}>
              <Fade left cascade>
                <p className={classes.ptypo}>▼ Socials</p>
              </Fade>
              <Fade left cascade>
                <div>
                  <Button startIcon={<i class="fas fa-globe"></i>} className={classes.bluebutton} variant="outlined" target="_blank" href="https://www.wantedly.com/secret_profiles/eM-bO62y5iyXrVbh4XtbxK96ijJc2XXA">
                    <span>Wantedly</span>
                  </Button>
                  <Button startIcon={<i class="fab fa-github"></i>} className={classes.button} variant="outlined" target="_blank" href="https://github.com/yukimimura?tab=repositories">
                    <span>Github</span>
                  </Button>
                </div>
              </Fade>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Profile;