import React, { useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';

import { EASY, MEDIUM, HARD } from 'constants/difficulties';
import { useGame } from 'contexts/GameContext';
import GameTemplate from './GameTemplate';

import './GameTemplate.scss';

const OptionsSelector = ({ allOptions }) => {
  const [numberOfOptionsPerRound, setNumberOfOptionsPerRound] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [startGame, setStartGame] = useState(false);
  const { isResettingGame, setIsResettingGame } = useGame();

  useEffect(() => {
    if (isResettingGame) {
      setStartGame(false);
      setNumberOfOptionsPerRound(null);
      setDifficulty(null);
      setIsResettingGame(false);
    }
  }, [isResettingGame, setIsResettingGame]);

  if (startGame && numberOfOptionsPerRound && difficulty) {
    return (
      <GameTemplate
        allOptions={allOptions}
        numberOfOptionsPerRound={numberOfOptionsPerRound}
        difficulty={difficulty}
      />
    );
  }

  const difficulties = [];

  if (allOptions.every((o) => Object.prototype.hasOwnProperty.call(o, EASY)))
    difficulties.push(EASY);
  if (allOptions.every((o) => Object.prototype.hasOwnProperty.call(o, MEDIUM)))
    difficulties.push(MEDIUM);
  if (allOptions.every((o) => Object.prototype.hasOwnProperty.call(o, HARD)))
    difficulties.push(HARD);

  return (
    <Container component="main" maxWidth="sm">
      <div className="options-selector">
        <h2>Please select the number of options presented in each round:</h2>
        <Button
          color={numberOfOptionsPerRound === 2 ? 'primary' : 'default'}
          variant="contained"
          size="large"
          fullWidth
          onClick={() => setNumberOfOptionsPerRound(2)}
        >
          TWO
        </Button>
        <Button
          color={numberOfOptionsPerRound === 3 ? 'primary' : 'default'}
          variant="contained"
          size="large"
          fullWidth
          onClick={() => setNumberOfOptionsPerRound(3)}
        >
          THREE
        </Button>
        <Button
          color={numberOfOptionsPerRound === 4 ? 'primary' : 'default'}
          variant="contained"
          size="large"
          fullWidth
          onClick={() => setNumberOfOptionsPerRound(4)}
        >
          FOUR
        </Button>

        {difficulties.length > 1 && (
          <>
            <h2 className="difficulty-title">
              Please select the difficulty level:
            </h2>
            {difficulties.map((d) => (
              <Button
                color={difficulty === d ? 'primary' : 'default'}
                variant="contained"
                size="large"
                fullWidth
                onClick={() => setDifficulty(d)}
                key={d}
              >
                {d.toUpperCase()}
              </Button>
            ))}
          </>
        )}

        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          className="start-game-button"
          onClick={() => {
            if (difficulties.length === 1) {
              setDifficulty(difficulties[0]);
            }
            setStartGame(true);
          }}
          disabled={
            !numberOfOptionsPerRound || (difficulties.length > 1 && !difficulty)
          }
        >
          <strong>START GAME</strong>
        </Button>
      </div>
    </Container>
  );
};

export default OptionsSelector;
