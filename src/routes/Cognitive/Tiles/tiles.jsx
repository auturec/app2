import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { TilesGame } from './TilesGame';

export const Tiles = () => {
  return (
    <div>
      <ToastProvider>
        <TilesGame />
      </ToastProvider>
    </div>
  );
};

export default Tiles;
