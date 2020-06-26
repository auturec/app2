import React, { useState } from 'react';

const GameContext = React.createContext();

// Allows user data to be accessible from everywhere
const GameProvider = (props) => {
  const [isResettingGame, setIsResettingGame] = useState(false);
  return (
    <GameContext.Provider
      value={{ isResettingGame, setIsResettingGame }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useGame = () => {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export { GameProvider, useGame };
