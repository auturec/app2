import React from 'react';
import { Button } from '@material-ui/core';

const Stage3Game = props => {
  const { setStage } = props;
  return (
    <div>
      Stage 3 Game!
      <Button variant="contained" color="secondary" onClick={() => setStage(1)}>
        Go back to Stage 1!
      </Button>
    </div>
  );
};

export default Stage3Game;
