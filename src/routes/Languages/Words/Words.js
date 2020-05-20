import React from 'react';

import GameTemplate from 'components/GameTemplate';
import { wordData } from './data';

export const Words = () => {
  return <GameTemplate allOptions={wordData} />;
};

export default Words;
