import React, { useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';

import { useGame } from 'contexts/GameContext';
import GameTemplate from './GameTemplate';

import './GameTemplate.scss';

const OptionsSelector = ({ allOptions }) => {
  const [numberOfOptionsPerRound, setNumberOfOptionsPerRound] = useState(null);
  const { isResettingGame, setIsResettingGame } = useGame();

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

  const allOptionsLength = allOptions.length;

  if (allOptionsLength <= 1) {
    return (
      <Container component="main" maxWidth="sm">
        <div className="options-selector">
          <h2>It seems like this game is not ready yet. Do come back later!</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="sm">
      <div className="options-selector">
        <h2>Please select the number of options presented in each round:</h2>
        {allOptionsLength >= 2 && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            onClick={() => setNumberOfOptionsPerRound(2)}
          >
            TWO
          </Button>
        )}
        {allOptionsLength >= 3 && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            onClick={() => setNumberOfOptionsPerRound(3)}
          >
            THREE
          </Button>
        )}
        {allOptionsLength >= 4 && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            onClick={() => setNumberOfOptionsPerRound(4)}
          >
            FOUR
          </Button>
        )}
      </div>
    </Container>
  );
};

export default OptionsSelector;
