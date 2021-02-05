import React from 'react';
import {Button, Box} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import fod from './images/fodmaplab.jpg'
import covid from './images/covid.png';
import book from './images/findbook1.png';
import hello from './images/hello.png';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 20,
    marginBottom: 80,
    fontFamily: 'Comic Sans MS',
    color: '#3298dc',
    paddingTop: 40,
    fontWeight: 'bold',
  },
  cardMedia: {
    paddingTop: '66.25%', // 16:9

  },
  cardUrl: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '10px',
    marginBottom: theme.spacing(2),
  },
  ulChange: {
    paddingLeft: 20,
  },
  cardContent: {
    paddingBottom: 0,
    margin: '0px 20px',
  },
  container: {
    marginBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
  }
}));

const tiers = [
  {
    title: '低FODMAP専門レシピサイト',
    description: '過敏性腸症候群の人向けのレシピサイトです。',
    points: [
      'レシピ投稿機能',
      'AWSとDockerの利用',
      'ユーザー機能',
    ],
    skill:  'Rails6 / JS / AWS / MySQL /Docker',
    url: 'http://35.72.117.112/',
    git: 'https://github.com/yukimimura/fodmaplab',
    image: fod,
  },
  {
    title: 'コロナ感染グラフ',
    description: '世界中のコロナ感染状況をグラフで確認できるサイトです。',
    points: [
      '国別グラフ機能',
      'React HooksとAPIの利用',
      'Chart.jsを用いたグラフ表示',
    ],
    skill:  'React / Chart.js / Material-UI',
    url: 'https://yukimimura.github.io/covid/',
    git: 'https://github.com/yukimimura/covid',
    image: covid,
  },
  {
    title: '言語学習SNS',
    description: '英語を学ぶ日本人と日本語を学ぶ外国人を繋ぐためのサイトです。', 
    points: [
      'Action Cableリアルタイムチャット機能',
      'JSを用いた自動スクロール機能',
      'S3を用いた画像投稿機能',
    ],
    skill: 'Rails6 / JS / Bootstrap / SQLite',
    url: 'https://make-friends-0605.herokuapp.com/users/sign_in',
    git: 'https://github.com/yukimimura/make_frineds',
    image: hello,
  },
  {
    title: '漫画レビューサイト',
    description: '漫画を検索＆レビュー、そして好みの合うユーザーと繋がれるサイトです。',
    points: [
      'JSを用いた星レビュー機能',
      '条件検索機能',
      'フォロー機能',
    ],
    skill:  'Rails5 / JS / Bulma / Mysql',
    url: 'https://find-book-0605.herokuapp.com/',
    git: 'https://github.com/yukimimura/find-book',
    image: book,
  },
];

export default function Work() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" className={classes.title}>
        <Fade left cascade>
          Works
        </Fade>
      </Typography>
      <Grid container spacing={5} alignItems="flex-end" className={classes.container}>
        {tiers.map((tier) => (
          <Grid item key={tier.title} xs={12} sm={tier.title === 'コロナ感染グラフ' ? 12 : 6} md={4}>
            <Card>
              <CardActionArea href={tier.url} target="_blank">
                <CardMedia
                    className={classes.cardMedia}
                    image={tier.image}
                  />
                <Fade left cascade>
                  <CardContent className={classes.cardContent}>
                    <Typography component="div" variant="subtitle1" color="textSecondary">
                      <Box fontSize={20} fontWeight="fontWeightBold">
                        {tier.title}
                      </Box>
                      <Box>
                        {tier.description}
                      </Box>
                      <ul className={classes.ulChange}>
                        {tier.points.map((point) => (
                          <Typography component="li" key={point}>
                            {point}
                          </Typography>
                        ))}
                      </ul>
                      <Box align="center">
                        {tier.skill}
                      </Box>
                    </Typography>
                  </CardContent>
                </Fade>
              </CardActionArea>
              <Fade left cascade>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary" href={tier.url} target="_blank" className={classes.button}>
                    VIEW
                  </Button>
                </CardActions>  
                <div className={classes.cardUrl}>
                  <Link display="block" variant="body1" href={tier.git} target="_blank">
                    <Grid container direction="row" spacing={1} alignItems="center">
                      <Grid item>
                        <i class="fab fa-github"></i>
                      </Grid>
                      <Grid item>source code</Grid>
                    </Grid>
                  </Link>
                </div>
              </Fade>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}