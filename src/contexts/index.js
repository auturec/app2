import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { GameProvider } from './GameContext';

const AppProviders = ({ children }) => {
  return (
    <ToastProvider autoDismiss placement="bottom-right">
      <GameProvider>{children}</GameProvider>
    </ToastProvider>
  );
};

export default AppProviders;
