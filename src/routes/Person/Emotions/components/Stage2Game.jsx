import React from 'react';
import { Button } from '@material-ui/core';

const Stage2Game = props => {
  const { setStage } = props;
  return (
    <div>
      Stage 2 Game!
      <Button variant="contained" color="secondary" onClick={() => setStage(3)}>
        Go to Next Stage!
      </Button>
    </div>
  );
};

export default Stage2Game;
