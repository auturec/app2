import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Occupations from 'routes/Languages/Occupations';

import 'routes/Languages/Language.scss';

const Language = () => {
  const [gameMode, setGameMode] = useState(null);

  switch (gameMode) {
    case 'OCCUPATIONS':
      return <Occupations handleBackToMenu={() => setGameMode(null)} />;
    default:
      return (
        <div className="columns is-multiline language is-marginless">
          <div className="column is-full language__header">
            <h1 className="title language__header--title">
              Welcome to Languages!
            </h1>
            <p className="language__header--description">
              This section includes games to help your child build their
              confidence in their language abilities!
            </p>
          </div>
          <div className="column is-full language__games">
            <h2 className="subtitle language__games--title">
              Select a game to begin:
            </h2>
            <div className="language__games--buttons">
              <Button
                variant="contained"
                color="default"
                size="large"
                fullWidth
                onClick={() => setGameMode('OCCUPATIONS')}
              >
                Occupations
              </Button>
            </div>
          </div>
        </div>
      );
  }
};

export default Language;
