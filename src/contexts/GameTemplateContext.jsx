import React, { useState } from 'react';

const GameTemplateContext = React.createContext();

// Allows user data to be accessible from everywhere
const GameTemplateProvider = (props) => {
  const [isResettingGame, setIsResettingGame] = useState(false);
  return (
    <GameTemplateContext.Provider
      value={{ isResettingGame, setIsResettingGame }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useGameTemplate = () => {
  const context = React.useContext(GameTemplateContext);
  if (context === undefined) {
    throw new Error(
      'useGameTemplate must be used within a GameTemplateProvider'
    );
  }
  return context;
};

export { GameTemplateProvider, useGameTemplate };
