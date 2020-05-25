import React from 'react';

import * as ShapeSvg from 'assets/images/shapes';
import { shapeSounds } from './sounds';

export const shapesData = [
  {
    component: <ShapeSvg.Square style={{ height: 'auto' }} />,
    name: 'Square',
    ...shapeSounds.Square,
  },
  {
    component: <ShapeSvg.Circle style={{ height: 'auto' }} />,
    name: 'Circle',
    ...shapeSounds.Circle,
  },
  {
    component: <ShapeSvg.Rectangle style={{ height: 'auto' }} />,
    name: 'Rectangle',
    ...shapeSounds.Rectangle,
  },
  {
    component: <ShapeSvg.Star style={{ height: 'auto' }} />,
    name: 'Star',
    ...shapeSounds.Star,
  },
];
