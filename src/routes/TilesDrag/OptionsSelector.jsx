import React, { useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';

import { useGameTemplate } from 'contexts/GameTemplateContext';
import TilesDrag from './TilesDrag';

import './TilesDrag.scss';

const OptionsSelector = () => {
  const [numberOfColors, setNumberOfColors] = useState(null);

  const { isResettingGame, setIsResettingGame } = useGameTemplate();

  useEffect(() => {
    if (isResettingGame) {
      setNumberOfColors(null);
      setIsResettingGame(false);
    }
  }, [isResettingGame, setIsResettingGame]);

  if (numberOfColors) {
    return <TilesDrag numberOfColors={numberOfColors} />;
  }

  return (
    <Container component="main" maxWidth="sm">
      <div className="options-selector">
        <h2>Please select the number of colours presented in each round:</h2>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={() => setNumberOfColors(2)}
        >
          TWO
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={() => setNumberOfColors(3)}
        >
          THREE
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={() => setNumberOfColors(4)}
        >
          FOUR
        </Button>
      </div>
    </Container>
  );
};

export default OptionsSelector;
