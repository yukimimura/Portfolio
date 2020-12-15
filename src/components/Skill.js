import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ruby from './images/ruby.png';
import js from './images/js.svg';
import html from './images/html.png';
import css from './images/css.png';
import rails from './images/rails.png';
import react from './images/react.svg';
import bootstrap from './images/bootstrap.svg';
import bulma from './images/bulma.png';
import material from './images/material.png';
import sqlite from './images/sqlite.png';
import mysql from './images/mysql.png';
import git from './images/git.png';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  parent: {
    backgroundColor: '#3298dc',
    padding: '20px 0',
    marginTop: 50,
  },
  title: {
    marginTop: 30,
    marginBottom: 50,
    fontFamily: 'Comic Sans MS',
    color: 'white',
    fontWeight: 'bold',
  },
  root: {
    marginBottom: 40,
  },
  palette1: {
    color: 'orange',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  subtitle: {
    marginBottom: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: '20px',
    borderBottom: 'solid #EEEEEE',
    textAlign: 'center',
  },
  image: {
    height: '30px',
    width: '30px',
  },
  element: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: '0 10px',
    color: 'white',
  },
  forcss: {
    marginLeft: 3,
    marginRight: 4,
  },
  space: {
    marginTop: 10,
  }
}));

const sample = (star1, star2) => {
  let stars = [];
  for (let i = 0; i < star1; i++) {
    stars.push(<i class="fas fa-star"></i>);
  }
  for (let i = 0; i < star2; i++) {
    stars.push(<i class="far fa-star"></i>);
  }
  return stars;
}

export default function Skill() {
  const classes = useStyles();

  return(
    <div className={classes.parent}>
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.title}>
          <Fade left cascade>
          Skills
          </Fade>
        </Typography>
      </Container>
      <Container component="main" maxWidth="md" className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.paper}>
              <Typography className={classes.subtitle}>
              <Fade left cascade>
                言語
                </Fade>
              </Typography>
              <img src={ruby} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Ruby</span></Fade>{sample(5, 0)}<br/>
              <div className={classes.space}/>
              <img src={js} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Javascript</span></Fade>{sample(3, 2)}<br/>
              <div className={classes.space}/>
              <img src={html} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>HTML</span></Fade>{sample(5, 0)}<br/>
              <div className={classes.space}/>
              <img src={css} width="23px" height="30px" alt="" className={classes.forcss}/><Fade left cascade><span className={classes.element}>CSS</span></Fade>{sample(4, 1)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.paper}>
              <Typography className={classes.subtitle}>
              <Fade left cascade>
                フレームワーク・ライブラリ
                </Fade>
              </Typography>
              <img src={rails} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Ruby on rails</span></Fade>{sample(5, 0)}<br/>
              <div className={classes.space}/>
              <img src={react} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>React</span></Fade>{sample(3, 2)}<br/>
              <div className={classes.space}/>
              <img src={bootstrap} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Bootstrap</span></Fade>{sample(4, 1)}<br/>
              <div className={classes.space}/>
              <img src={bulma} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Bulma</span></Fade>{sample(4, 1)}<br/>
              <div className={classes.space}/>
              <img src={material} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Material-UI</span></Fade>{sample(3, 2)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.paper}>
              <Typography className={classes.subtitle}>
              <Fade left cascade>
                データベース・その他
                </Fade>
              </Typography>
              <img src={mysql} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Mysql</span></Fade>{sample(3, 2)}<br/>
              <div className={classes.space}/>
              <img src={sqlite} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>SQLite</span></Fade>{sample(3, 2)}<br/>
              <div className={classes.space}/>
              <img src={git} className={classes.image} alt=""/><Fade left cascade><span className={classes.element}>Git</span></Fade>{sample(4, 1)}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}