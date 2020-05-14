import React from 'react';

import GameTemplate from 'components/GameTemplate';
import { occupationData } from './data';

import './Occupations.scss';

const Occupations = () => {
  return <GameTemplate allOptions={occupationData} />;
};

export default Occupations;
