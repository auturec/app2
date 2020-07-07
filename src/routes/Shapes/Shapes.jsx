import React from 'react';

import GameTemplate from 'components/GameTemplate';
import { shapesData } from './data';

const Shapes = () => {
  return <GameTemplate allOptions={shapesData} />;
};

export default Shapes;
