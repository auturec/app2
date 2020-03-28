import React, { useState } from 'react';
import { Container, makeStyles, Paper } from '@material-ui/core';
import { ToastProvider } from 'react-toast-notifications';
import Title from './components/Title';
import Stage1Game from './components/Stage1Game';
import Stage2Game from './components/Stage2Game';
import Stage3Game from './components/Stage3Game';

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

  const StageSelector = stageId => {
    if (stageId === 1) {
      return <Stage1Game setStage={setStage} />;
    } if (stageId === 2) {
      return <Stage2Game setStage={setStage} />;
    } if (stageId === 3) {
      return <Stage3Game setStage={setStage} />;
    } 
      return <div>Oops, the stage is not found.</div>;
    
  };

  return (
    <Container>
      <Paper elevation={1} className={classes.paper}>
        <ToastProvider>
          <Title stage={stage} />
          {StageSelector(stage)}
        </ToastProvider>
      </Paper>
    </Container>
  );
};
