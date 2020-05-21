import React from 'react';

import GameTemplate from 'components/GameTemplate';
import { numbersData } from './data';

const Numbers = () => {
  return <GameTemplate allOptions={numbersData} />;
};

export default Numbers;
