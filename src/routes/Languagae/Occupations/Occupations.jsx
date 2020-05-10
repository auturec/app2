import React, { useReducer, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

import DataLoader from 'components/DataLoader/DataLoader';
import { getRandomElement, getNRandomElements } from 'utils/randomUtils';
import { occupationData } from 'routes/Languagae/Occupations/data';

import './Occupations.scss';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
}));

const Occupations = ({ handleBackToMenu }) => {
  const classes = useStyles();
  const { addToast } = useToasts();
  const [state, setState] = useReducer((a, s) => ({ ...a, ...s }), {
    isLoading: true,
    occupations: [],
    answer: null,
    gameType: 'EXPRESSIVE',
    isCompleted: false,
  });

  useEffect(() => {
    let didCancel = false;

    const startGame = async () => {
      await setState({
        isLoading: true,
        isCompleted: false,
      });
      const finalOccupations = getNRandomElements(occupationData, 4);
      const finalAnswer = getRandomElement(finalOccupations);
      if (!didCancel) {
        await setState({
          occupations: finalOccupations,
          answer: finalAnswer,
          gameType: Math.random() < 0.5 ? 'RECEPTIVE' : 'EXPRESSIVE',
          isLoading: false,
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
      isCompleted: false,
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
      isLoading: false,
    });
  };

  const handleSelect = (option) => {
    const isCorrect = option === state.answer.name;
    if (isCorrect) {
      addToast(`Great job!`, {
        appearance: 'success',
        autoDismiss: true,
      });
      setState({
        isCompleted: true,
      });
    } else {
      addToast(`Oh dear, do try again!`, {
        appearance: 'error',
        autoDismiss: true,
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
      <div className={`occupations ${classes.paper}`}>
        <div className="occupations__expressive--header">
          <h1 className="occupations__receptive--title">Who is this?</h1>
        </div>

        <div className="column is-full">
          <state.answer.svg width={200} height={200} />
        </div>
        <div className="occupations__expressive--answers">
          <p className="occupations__expressive--description">
            {state.isCompleted
              ? 'Great job! What next?'
              : 'Say out the occupation before selecting the option!'}
          </p>
          {!state.isCompleted &&
            state.occupations.map((o) => (
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={() => handleSelect(o.name)}
                key={`occupations-button-${o.name}`}
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
    );
  }

  return (
    <div className={`occupations ${classes.paper}`}>
      <div className="occupations__receptive--header">
        <h1 className="occupations__receptive--title">Choose the</h1>
        <h1 className="occupations__receptive--job-name">
          {state.answer.name}
        </h1>
      </div>
      <div className="occupations__receptive--options">
        <p className="occupations__receptive--description">
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
                <state.answer.svg style={{ height: 'auto' }} />
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
            {state.occupations.map((o) => (
              <Button
                variant="contained"
                className="button occupations__receptive--button"
                onClick={() => handleSelect(o.name)}
                key={`occupations-button-${o.name}`}
              >
                <o.svg style={{ height: 'auto' }} />
              </Button>
            ))}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Occupations;
