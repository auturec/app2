import React from 'react';

import { MEDIUM } from 'constants/difficulties';
import * as NumberSvg from 'assets/images/numbers';
import { numberSounds } from './sounds';

export const numbersData = [
  {
    [MEDIUM]: <NumberSvg.Number1 style={{ height: 'auto' }} />,
    name: 'One',
    ...numberSounds.Number1,
  },
  {
    [MEDIUM]: <NumberSvg.Number2 style={{ height: 'auto' }} />,
    name: 'Two',
    ...numberSounds.Number2,
  },
  {
    [MEDIUM]: <NumberSvg.Number3 style={{ height: 'auto' }} />,
    name: 'Three',
    ...numberSounds.Number3,
  },
  {
    [MEDIUM]: <NumberSvg.Number4 style={{ height: 'auto' }} />,
    name: 'Four',
    ...numberSounds.Number4,
  },
  {
    [MEDIUM]: <NumberSvg.Number5 style={{ height: 'auto' }} />,
    name: 'Five',
    ...numberSounds.Number5,
  },
  {
    [MEDIUM]: <NumberSvg.Number6 style={{ height: 'auto' }} />,
    name: 'Six',
    ...numberSounds.Number6,
  },
  {
    [MEDIUM]: <NumberSvg.Number7 style={{ height: 'auto' }} />,
    name: 'Seven',
    ...numberSounds.Number7,
  },
  {
    [MEDIUM]: <NumberSvg.Number8 style={{ height: 'auto' }} />,
    name: 'Eight',
    ...numberSounds.Number8,
  },
  {
    [MEDIUM]: <NumberSvg.Number9 style={{ height: 'auto' }} />,
    name: 'Nine',
    ...numberSounds.Number9,
  },
];
