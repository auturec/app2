import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import {
  shuffleArray,
  getNRandomElements,
  getRandomElement,
} from 'utils/randomUtils';
import './Colors.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  box: {
    backgroundColor: 'red',
    width: '100px',
    height: '100px',
  },
}));

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fade: false };
  }

  render() {
    const { fade } = this.state;

    return (
      <button
        type="button"
        onClick={() => this.setState({ fade: true })}
        onAnimationEnd={() => this.setState({ fade: false })}
        className={fade ? 'fade' : ''}
      >
        Click me!
      </button>
    );
  }
}

const TapColors = () => {
  const classes = useStyles();
  const [colors, handleColors] = React.useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);

  const getRandomTwoColors = () => {
    handleColors(shuffleArray(colors));
    const c = getNRandomElements(colors, 2);
    const a = getRandomElement(c);
    console.log(c);
    console.log(a);
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <div>TOUCH RED</div>
        <button type="button" onClick={getRandomTwoColors}>
          Click me
        </button>
        <div className={classes.box}>This is the colors page</div>
        <ClickMe />
      </div>
    </Container>
  );
};

export default TapColors;
