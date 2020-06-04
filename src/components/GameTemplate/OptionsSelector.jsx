import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

import { useGameTemplate } from 'contexts/GameTemplateContext';
import GameTemplate from './GameTemplate';

import './GameTemplate.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  header: {
    fontFamily: 'Open Sans',
  },
  buttonText: {
    fontFamily: 'Montserrat',
  },
}));

const OptionsSelector = ({ allOptions }) => {
  const [numberOfOptionsPerRound, setNumberOfOptionsPerRound] = useState(null);
  const classes = useStyles();
  const { isResettingGame, setIsResettingGame } = useGameTemplate();

  useEffect(() => {
    if (isResettingGame) {
      setNumberOfOptionsPerRound(null);
      setIsResettingGame(false);
    }
  }, [isResettingGame, setIsResettingGame]);

  if (numberOfOptionsPerRound) {
    return (
      <GameTemplate
        allOptions={allOptions}
        numberOfOptionsPerRound={numberOfOptionsPerRound}
      />
    );
  }

  return (
    <Container component="main" maxWidth="sm">
      <div className={`options-selector ${classes.paper}`}>
        <br />
        <h2 className={classes.header}>
          Please select the number of options presented in each round:
        </h2>
        <Button
          className={classes.buttonText}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={() => setNumberOfOptionsPerRound(2)}
        >
          TWO
        </Button>
        <Button
          className={classes.buttonText}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={() => setNumberOfOptionsPerRound(3)}
        >
          THREE
        </Button>
        <Button
          className={classes.buttonText}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={() => setNumberOfOptionsPerRound(4)}
        >
          FOUR
        </Button>
      </div>
    </Container>
  );
};

export default OptionsSelector;
