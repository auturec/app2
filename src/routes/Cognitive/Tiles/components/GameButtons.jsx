import React from 'react';
import { useToasts } from 'react-toast-notifications';

import { TilesImageMap } from '../TilesImageMap';

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

  return (
    <div className="buttons has-addons is-centered">
      <button
        className="button is-dark has-text-white"
        onClick={e => handleAnswer(e)}
        type="button"
      >
        Check Answer
      </button>
      <button
        className="button is-info has-text-black"
        onClick={e => handleReset(e)}
        type="button"
      >
        Reset Game
      </button>
      <button
        className="button is-warning has-text-black"
        onClick={e => handleClearAll(e)}
        type="button"
      >
        Clear All Selections
      </button>
    </div>
  );
};

export default Gamepapers;
