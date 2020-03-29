import React, { useReducer, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Grid, Button } from '@material-ui/core';

import DataLoader from 'components/DataLoader/DataLoader';
import { getRandomElement, getNRandomElements } from 'utils/randomUtils';
import { occupationData } from 'routes/Languagae/Occupations/data';

import 'routes/Languagae';

const Occupations = ({ handleBackToMenu }) => {
  const { addToast } = useToasts();
  const [state, setState] = useReducer((a, s) => ({ ...a, ...s }), {
    isLoading: true,
    occupations: [],
    answer: null,
    gameType: 'EXPRESSIVE',
    isCompleted: false
  });

  useEffect(() => {
    let didCancel = false;

    const startGame = async () => {
      await setState({
        isLoading: true,
        isCompleted: false
      });
      const finalOccupations = getNRandomElements(occupationData, 4);
      const finalAnswer = getRandomElement(finalOccupations);
      if (!didCancel) {
        await setState({
          occupations: finalOccupations,
          answer: finalAnswer,
          gameType: Math.random() < 0.5 ? 'RECEPTIVE' : 'EXPRESSIVE',
          isLoading: false
        });
      }
    };

    startGame();

    return () => {
      didCancel = true;
    };
  }, []);

  const handleNewGame = async () => {
    await setState({
      isLoading: true,
      isCompleted: false
    });
    const previousAnswer = state.answer;
    const finalOccupations = getNRandomElements(occupationData, 4);
    let finalAnswer = getRandomElement(finalOccupations);
    while (previousAnswer && finalAnswer.name === previousAnswer.name) {
      finalAnswer = getRandomElement(finalOccupations);
    }
    await setState({
      occupations: finalOccupations,
      answer: finalAnswer,
      gameType: Math.random() < 0.5 ? 'RECEPTIVE' : 'EXPRESSIVE',
      isLoading: false
    });
  };

  const handleSelect = option => {
    const isCorrect = option === state.answer.name;
    if (isCorrect) {
      addToast(`Great job!`, {
        appearance: 'success',
        autoDismiss: true
      });
      setState({
        isCompleted: true
      });
    } else {
      addToast(`Oh dear, do try again!`, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };

  if (state.isLoading) {
    return (
      <div className="occupations__loading">
        <DataLoader />
      </div>
    );
  }

  if (state.gameType === 'EXPRESSIVE') {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <div className="columns is-marginless is-multiline occupations">
            <div className="column is-full occupations__expressive--title">
              <h1 className="title">Who is this?</h1>
            </div>

            <div className="column is-full">
              <state.answer.svg width={200} height={200} />
            </div>
            <div className="column is-full is-half-tablet occupations__expressive--answers">
              <p className="is-size-5 occupations__expressive--description">
                {state.isCompleted
                  ? 'Great job! What next?'
                  : 'Say out the occupation before selecting the option!'}
              </p>
              {!state.isCompleted &&
                state.occupations.map(o => (
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={() => handleSelect(o.name)}
                  >
                    {o.name}
                  </Button>
                ))}
              {state.isCompleted && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={handleNewGame}
                  >
                    Awesome! Another question!
                  </Button>
                  <Button
                    variant="contained"
                    color="default"
                    size="large"
                    fullWidth
                    onClick={handleBackToMenu}
                  >
                    Back to Main Menu
                  </Button>
                </>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className="columns is-marginless is-multiline occupations">
      <div className="column is-full occupations__receptive--title">
        <h1 className="title is-size-3">Choose the</h1>
        <h1 className="occupations__receptive--job-name has-text-info">
          {state.answer.name}
        </h1>
      </div>
      <div className="column is-full is-half-tablet occupations__receptive--options">
        <p className="is-size-5 occupations__receptive--description">
          {state.isCompleted
            ? 'Great job! What next?'
            : 'Tap the photo that best shows the above occupation!'}
        </p>
        {state.isCompleted && (
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Button
                variant="contained"
                className="button occupations__receptive--button"
                disabled
              >
                <state.answer.svg height="auto" width="auto" />
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleNewGame}
              >
                Awesome! Another question!
              </Button>
              <Button
                variant="contained"
                color="default"
                size="large"
                fullWidth
                onClick={handleBackToMenu}
              >
                Back to Main Menu
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
      {!state.isCompleted && (
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            {state.occupations.map(o => (
              <Button
                variant="contained"
                className="button occupations__receptive--button"
                onClick={() => handleSelect(o.name)}
              >
                <o.svg height="auto" width="auto" />
              </Button>
            ))}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Occupations;
