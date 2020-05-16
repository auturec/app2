import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import {
  shuffleArray,
  getNRandomElements,
  getRandomElement,
} from 'utils/randomUtils';

import ColorOptions from './ColorOptions';
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
    getRandomElement(c);
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <div>TOUCH RED</div>
        <button type="button" onClick={getRandomTwoColors}>
          Click me
        </button>
        <ColorOptions />
      </div>
    </Container>
  );
};

export default TapColors;
