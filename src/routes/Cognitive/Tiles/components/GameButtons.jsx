import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useToasts } from 'react-toast-notifications';

import { ButtonGroup } from '@material-ui/core';
import { TilesImageMap } from '../TilesImageMap';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  /*
  redbutton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },

  greenbutton: {
    background: 'linear-gradient(to right, #78ffd6, #a8ff78)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },

  yellowbutton: {
    background: 'linear-gradient(to right, #F2C94C, #F2994A)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
*/
});

const Gamepapers = props => {
  const {
    ansState,
    setAnswer,
    gameState,
    setGameState,
    setDisplay,
    randomList,
    shuffleArray,
    getFourRandomFromArray
  } = props;
  const { addToast } = useToasts();
  const handleAnswer = e => {
    e.preventDefault();
    if (ansState.list.every(val => gameState.ans.includes(val))) {
      addToast(`Nice work matching the patterns!`, {
        appearance: 'success',
        autoDismiss: true
      });
    } else {
      addToast(`Please check your answer and try again!`, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };

  const handleClearAll = e => {
    e.preventDefault();
    setAnswer({
      ...ansState,
      list: [-1, -1, -1, -1],
      pos: 0
    });
    addToast(`Selections has been cleared`, {
      appearance: 'warning',
      autoDismiss: true
    });
  };

  const handleReset = e => {
    e.preventDefault();
    addToast(`Game has been reset!`, {
      appearance: 'warning',
      autoDismiss: true
    });
    // Reset game
    setGameState({
      ...gameState,
      list: TilesImageMap(),
      ans: getFourRandomFromArray(TilesImageMap())
    });
    // Reset Display
    setDisplay({
      ...randomList,
      display: shuffleArray(gameState.ans)
    });

    handleClearAll(e);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined secondary button group">
        <Button onClick={e => handleAnswer(e)} type="button">
          Check Answer
        </Button>
        <Button onClick={e => handleReset(e)} type="button">
          Reset Game
        </Button>
        <Button onClick={e => handleClearAll(e)} type="button">
          Clear Selections
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Gamepapers;
