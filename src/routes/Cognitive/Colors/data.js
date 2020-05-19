import React from 'react';

import ColorBox from './ColorBox';
import { colorSounds } from './sounds';
import './Colors.scss';

export const colorData = [
  {
    component: <ColorBox color="red" />,
    name: 'Red',
    ...colorSounds.red,
  },
  {
    component: <ColorBox color="orange" />,
    name: 'Orange',
    ...colorSounds.orange,
  },
  {
    component: <ColorBox color="yellow" />,
    name: 'Yellow',
    ...colorSounds.yellow,
  },
  {
    component: <ColorBox color="green" />,
    name: 'Green',
    ...colorSounds.green,
  },
  {
    component: <ColorBox color="blue" />,
    name: 'Blue',
    ...colorSounds.blue,
  },
  {
    component: <ColorBox color="brown" />,
    name: 'Brown',
    ...colorSounds.brown,
  },
  {
    component: <ColorBox color="black" />,
    name: 'Black',
    ...colorSounds.black,
  },
  {
    component: <ColorBox color="white" />,
    name: 'White',
    ...colorSounds.white,
  },
  {
    component: <ColorBox color="purple" />,
    name: 'Purple',
    ...colorSounds.purple,
  },
];
