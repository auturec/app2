import React, { useState } from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';
import { ToastProvider } from 'react-toast-notifications';
import Title from './components/Title';
import Stage1Game from './components/Stage1Game';
import Stage2Game from './components/Stage2Game';
import Stage3Game from './components/Stage3Game';
import GameButtons from './components/GameButtons';

import { getListWithEmotion } from './EmotionsGameMap';

const useStyles = makeStyles({
  paper: {
    marginTop: 100,
    marginBottom: 50,
    background: 'linear-gradient(to right, #E2E2E2, #C9D6FF)'
  }
});

export const EmotionsGame = () => {
  const [stage, setStage] = useState(1);
  const classes = useStyles();

  const shuffleArray = original => {
    const copy = original.slice();
    for (let i = copy.length - 1; i > 1; i = -1) {
      const j = Math.floor(Math.random() * i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const getRandomPicArray = () => {
    const ans = [null, null, null, null];
    const happy = getListWithEmotion('happy');
    ans[0] = happy[Math.floor(Math.random() * (happy.length - 1))];

    const sad = getListWithEmotion('sad');
    ans[1] = sad[Math.floor(Math.random() * (sad.length - 1))];

    const angry = getListWithEmotion('angry');
    ans[2] = angry[Math.floor(Math.random() * (angry.length - 1))];

    const afraid = getListWithEmotion('afraid');
    ans[3] = afraid[Math.floor(Math.random() * (afraid.length - 1))];

    const indexList = ans.map((val, index) => index);
    return shuffleArray(indexList);
  };

  const [gameState, setGameState] = useState(getRandomPicArray());

  const resetGame = e => {
    e.preventDefault();
    setGameState(getRandomPicArray());
  };

  const StageSelector = stageId => {
    if (stageId === 1) {
      return <Stage1Game gameState={gameState} />;
    } if (stageId === 2) {
      return <Stage2Game />;
    } if (stageId === 3) {
      return <Stage3Game />;
    } 
      return <div>Oops, the stage is not found.</div>;
    
  };

  return (
    <Container>
      <Paper elevation={1} className={classes.paper}>
        <ToastProvider>
          <Title stage={stage} setStage={setStage} />
          {StageSelector(stage)}
          <GameButtons resetGame={resetGame} />
        </ToastProvider>
      </Paper>
    </Container>
  );
};
