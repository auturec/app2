/* eslint-disable no-nested-ternary */
import React, { useReducer, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import UIFx from 'uifx';

import DataLoader from 'components/DataLoader/DataLoader';
import { getRandomElement, getNRandomElements } from 'utils/randomUtils';
import { getNumberOfEqualOptions } from 'utils/gameUtils';
import {
  positiveFeedbackSounds,
  negativeFeedbackSound,
} from './feedbackSounds';

import './GameTemplate.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
}));

// Refer to sampleOptions.js for example of how inputs should look like
// Refer to routes/Occupations for example of how to use this component
const GameTemplate = ({
  allOptions,
  numberOfOptionsPerRound = 4,
  className = '',
}) => {
  const classes = useStyles();
  const [state, setState] = useReducer((a, s) => ({ ...a, ...s }), {
    isLoading: true,
    options: [],
    answer: null,
    isCompleted: false,
    wrongAttempts: 0,
    touchSound: null,
    thisIsSound: null,
    feedbackSound: null,
  });

  useEffect(() => {
    let didCancel = false;

    const startGame = () => {
      const options = getNRandomElements(allOptions, numberOfOptionsPerRound);
      const answer = getRandomElement(options);
      const touchSound = new UIFx(answer.touchSound);
      const thisIsSound = new UIFx(answer.thisIsSound);
      const feedbackSound = getRandomElement(positiveFeedbackSounds);
      if (!didCancel) {
        setState({
          options,
          answer,
          isLoading: false,
          touchSound,
          thisIsSound,
          feedbackSound,
        });
      }
      setTimeout(() => {
        touchSound.play();
      }, 1000);
    };

    startGame();

    return () => {
      didCancel = true;
    };
  }, [allOptions, numberOfOptionsPerRound]);

  const handleNewGame = async () => {
    await setState({
      isLoading: true,
      isCompleted: false,
      wrongAttempts: 0,
    });
    const previousAnswer = state.answer;
    let options = getNRandomElements(allOptions, numberOfOptionsPerRound);
    while (
      getNumberOfEqualOptions(options, state.options) >=
      Math.floor(numberOfOptionsPerRound / 2)
    ) {
      options = getNRandomElements(allOptions, numberOfOptionsPerRound);
    }
    let answer = getRandomElement(options);
    while (previousAnswer && answer.name === previousAnswer.name) {
      answer = getRandomElement(options);
    }
    const touchSound = new UIFx(answer.touchSound);
    const thisIsSound = new UIFx(answer.thisIsSound);
    const feedbackSound = getRandomElement(positiveFeedbackSounds);
    await setState({
      options,
      answer,
      isLoading: false,
      touchSound,
      thisIsSound,
      feedbackSound,
    });
    touchSound.play();
  };

  const handleSelect = (option) => {
    const isCorrect = option === state.answer.name;
    if (isCorrect) {
      state.feedbackSound.sound.play();
      setState({
        isCompleted: true,
      });
      setTimeout(() => {
        handleNewGame();
      }, 3000);
    } else {
      negativeFeedbackSound.play();
      if (state.wrongAttempts === 0) {
        setTimeout(() => {
          setState({
            wrongAttempts: state.wrongAttempts + 1,
          });
          state.touchSound.play();
        }, 1000);
        return;
      }
      setTimeout(() => {
        setState({
          wrongAttempts: state.wrongAttempts + 1,
          isCompleted: true,
        });
        state.thisIsSound.play();
      }, 1000);
      setTimeout(() => {
        handleNewGame();
      }, 4000);
    }
  };

  if (state.isLoading) {
    return (
      <div className="game-template__loading">
        <DataLoader />
      </div>
    );
  }

  return (
    <div className={`game-template ${classes.paper} ${className}`}>
      <div className="game-template__header">
        <h1 className="game-template__header--title">
          {state.isCompleted
            ? state.wrongAttempts > 1
              ? 'THIS IS'
              : ''
            : 'TOUCH'}
        </h1>
        <h1
          className={`game-template__header--answer ${
            state.isCompleted ? 'is-correct' : ''
          } ${state.answer.name.length > 7 ? 'is-minimised' : ''}`}
        >
          {state.isCompleted && state.wrongAttempts < 2
            ? state.feedbackSound.phrase
            : state.answer.name}
        </h1>
      </div>
      <div className="game-template__options">
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            {state.options.map((o) => (
              <Button
                variant="contained"
                className={`button game-template__options--button ${
                  state.isCompleted
                    ? o.name === state.answer.name
                      ? 'is-correct'
                      : 'is-wrong'
                    : ''
                } ${
                  state.wrongAttempts > 0
                    ? o.name === state.answer.name
                      ? 'is-hinted'
                      : 'is-faded'
                    : ''
                }`}
                onClick={() => handleSelect(o.name)}
                key={`game-template-button-${o.name}`}
                disabled={state.isCompleted && o.name === state.answer.name}
              >
                {o.component}
              </Button>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GameTemplate;
