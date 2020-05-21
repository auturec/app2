import React from 'react';

import * as NumberSvg from 'assets/images/numbers';
import { numberSounds } from './sounds';

export const numbersData = [
  {
    component: <NumberSvg.Number1 style={{ height: 'auto' }} />,
    name: 'One',
    ...numberSounds.Number1,
  },
  {
    component: <NumberSvg.Number2 style={{ height: 'auto' }} />,
    name: 'Two',
    ...numberSounds.Number2,
  },
  {
    component: <NumberSvg.Number3 style={{ height: 'auto' }} />,
    name: 'Three',
    ...numberSounds.Number3,
  },
  {
    component: <NumberSvg.Number4 style={{ height: 'auto' }} />,
    name: 'Four',
    ...numberSounds.Number4,
  },
  {
    component: <NumberSvg.Number5 style={{ height: 'auto' }} />,
    name: 'Five',
    ...numberSounds.Number5,
  },
  {
    component: <NumberSvg.Number6 style={{ height: 'auto' }} />,
    name: 'Six',
    ...numberSounds.Number6,
  },
  {
    component: <NumberSvg.Number7 style={{ height: 'auto' }} />,
    name: 'Seven',
    ...numberSounds.Number7,
  },
  {
    component: <NumberSvg.Number8 style={{ height: 'auto' }} />,
    name: 'Eight',
    ...numberSounds.Number8,
  },
  {
    component: <NumberSvg.Number9 style={{ height: 'auto' }} />,
    name: 'Nine',
    ...numberSounds.Number9,
  },
];
