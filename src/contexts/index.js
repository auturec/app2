import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { GameTemplateProvider } from './GameTemplateContext';

const AppProviders = ({ children }) => {
  return (
    <ToastProvider autoDismiss placement="bottom-right">
      <GameTemplateProvider>{children}</GameTemplateProvider>
    </ToastProvider>
  );
};

export default AppProviders;
