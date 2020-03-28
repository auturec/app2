import React, { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Container, Paper, makeStyles } from '@material-ui/core';
import DisplayRandom from './components/DisplayRandom';
import GameButtons from './components/GameButtons';
import HeaderTitle from './components/HeaderTitle';
import ImHeader from './components/ImHeader';
import PlayArea from './components/PlayArea';
import { TilesImageMap } from './TilesImageMap';

const useStyles = makeStyles({
  paper: {
    marginTop: 100,
    marginBottom: 50,
    background: 'linear-gradient(to right, #E2E2E2, #C9D6FF)'
  }
});

export const TilesGame = () => {
  const classes = useStyles();

  const shuffleArray = original => {
    const copy = original.slice();
    for (let i = copy.length - 1; i > 1; i = -1) {
      const j = Math.floor(Math.random() * i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const getFourRandomFromArray = array => {
    const indexList = array.map((val, index) => index);
    const randomArray = shuffleArray(indexList);
    return randomArray.slice(0, 4);
  };

  const [gameState, setGameState] = useState({
    list: TilesImageMap(),
    ans: getFourRandomFromArray(TilesImageMap())
  });

  const [randomList, setDisplay] = useState({
    display: shuffleArray(gameState.ans)
  });

  const [ansState, setAnswer] = useState({
    list: [-1, -1, -1, -1],
    pos: 0
  });

  const handleImageClick = (e, data) => {
    e.preventDefault();
    if (ansState.pos < ansState.list.length) {
      let curr = ansState.pos;
      const currList = ansState.list.slice();
      currList[curr] = data;
      curr += 1;
      setAnswer({
        ...ansState,
        list: currList,
        pos: curr
      });
    }
  };

  return (
    <Container>
      <Paper elevation={1} className={classes.paper}>
        <ToastProvider autoDismiss placement="bottom-right">
          <HeaderTitle />
          <GameButtons
            ansState={ansState}
            setAnswer={setAnswer}
            gameState={gameState}
            setGameState={setGameState}
            setDisplay={setDisplay}
            randomList={randomList}
            shuffleArray={shuffleArray}
            getFourRandomFromArray={getFourRandomFromArray}
          />
          <ImHeader
            handleImageClick={handleImageClick}
            randomList={randomList}
            gameState={gameState}
          />
          <DisplayRandom gameState={gameState} />
          <PlayArea ansState={ansState} gameState={gameState} />
        </ToastProvider>
      </Paper>
    </Container>
  );
};

export default TilesGame;
