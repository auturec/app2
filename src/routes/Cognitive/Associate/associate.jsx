import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import AssociateGame from './AssociateGame';

export const Associate = () => {
  return (
    <ToastProvider placement="bottom-right">
      <AssociateGame />
    </ToastProvider>
  );
};

export default Associate;
