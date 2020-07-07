import React from 'react';

import { MEDIUM } from 'constants/difficulties';
import ColorBox from './ColorBox';
import { colorSounds } from './sounds';
import './Colors.scss';

export const colorData = [
  {
    [MEDIUM]: <ColorBox color="red" />,
    name: 'Red',
    ...colorSounds.red,
  },
  {
    [MEDIUM]: <ColorBox color="orange" />,
    name: 'Orange',
    ...colorSounds.orange,
  },
  {
    [MEDIUM]: <ColorBox color="yellow" />,
    name: 'Yellow',
    ...colorSounds.yellow,
  },
  {
    [MEDIUM]: <ColorBox color="green" />,
    name: 'Green',
    ...colorSounds.green,
  },
  {
    [MEDIUM]: <ColorBox color="blue" />,
    name: 'Blue',
    ...colorSounds.blue,
  },
  {
    [MEDIUM]: <ColorBox color="brown" />,
    name: 'Brown',
    ...colorSounds.brown,
  },
  {
    [MEDIUM]: <ColorBox color="black" />,
    name: 'Black',
    ...colorSounds.black,
  },
  {
    [MEDIUM]: <ColorBox color="white" />,
    name: 'White',
    ...colorSounds.white,
  },
  {
    [MEDIUM]: <ColorBox color="purple" />,
    name: 'Purple',
    ...colorSounds.purple,
  },
];
