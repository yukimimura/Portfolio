import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Work from './components/Work';
import Footer from './components/Footer';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
  
// }));

function App() {
  // const classes = useStyles();

  return (
    <>
      <Header />
      <Profile />
      <Skill />
      <Work />
      <Footer/>
    </>
  );
}

export default App;
