import React from 'react';
import { Button } from '@material-ui/core';

const Stage1Game = props => {
  const { setStage } = props;

  return (
    <div>
      Stage 1 Game!
      <Button variant="contained" color="secondary" onClick={() => setStage(2)}>
        Go to Next Stage!
      </Button>
    </div>
  );
};

export default Stage1Game;
