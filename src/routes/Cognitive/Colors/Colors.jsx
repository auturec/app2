import React from 'react';
import GameTemplate from 'components/GameTemplate';
import { colorData } from './data';

const TapColors = () => {
  return <GameTemplate allOptions={colorData} />;
};

export default TapColors;
