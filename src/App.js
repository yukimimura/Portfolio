import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Main from './components/Main';
import Footer from './components/Footer';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    // padding: '30px 0',
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

// 最初のアニメ追加。スライドしたら要素がアニメで表示されるようにする。

function App() {
  const classes = useStyles();

  return (
    <div>
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
                  This website is built with React<i class="fab fa-react"></i>
                </Fade>
              </Typography>
            </Container>
          </div>
        </div>
        <Header />
        <Profile />
      <div className={classes.body}>
        <Skill />
      </div>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
