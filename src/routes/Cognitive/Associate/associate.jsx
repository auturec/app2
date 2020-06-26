import React from 'react';

import GameTemplate from 'components/GameTemplate';
import { associateData } from './data';

export const Associate = () => {
  return <GameTemplate allOptions={associateData} />;
};

export default Associate;
