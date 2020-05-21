import React from 'react';

import * as NumberSvg from 'assets/images/numbers';
import { numberSounds } from './sounds';

export const numbersData = [
  {
    component: <NumberSvg.Number1 style={{ height: 'auto' }} />,
    name: 'Number1',
    ...numberSounds.Number1,
  },
  {
    component: <NumberSvg.Number2 style={{ height: 'auto' }} />,
    name: 'Number2',
    ...numberSounds.Number2,
  },
  {
    component: <NumberSvg.Number3 style={{ height: 'auto' }} />,
    name: 'Number3',
    ...numberSounds.Number3,
  },
  {
    component: <NumberSvg.Number4 style={{ height: 'auto' }} />,
    name: 'Number4',
    ...numberSounds.Number4,
  },
  {
    component: <NumberSvg.Number5 style={{ height: 'auto' }} />,
    name: 'Number5',
    ...numberSounds.Number5,
  },
  {
    component: <NumberSvg.Number6 style={{ height: 'auto' }} />,
    name: 'Number6',
    ...numberSounds.Number6,
  },
  {
    component: <NumberSvg.Number7 style={{ height: 'auto' }} />,
    name: 'Number7',
    ...numberSounds.Number7,
  },
  {
    component: <NumberSvg.Number8 style={{ height: 'auto' }} />,
    name: 'Number8',
    ...numberSounds.Number8,
  },
  {
    component: <NumberSvg.Number9 style={{ height: 'auto' }} />,
    name: 'Number9',
    ...numberSounds.Number9,
  },
];
