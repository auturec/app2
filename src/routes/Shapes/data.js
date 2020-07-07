import React from 'react';

import { MEDIUM } from 'constants/difficulties';
import * as ShapeSvg from 'assets/images/shapes';
import { shapeSounds } from './sounds';

export const shapesData = [
  {
    [MEDIUM]: <ShapeSvg.Square style={{ height: 'auto' }} />,
    name: 'Square',
    ...shapeSounds.Square,
  },
  {
    [MEDIUM]: <ShapeSvg.Circle style={{ height: 'auto' }} />,
    name: 'Circle',
    ...shapeSounds.Circle,
  },
  {
    [MEDIUM]: <ShapeSvg.Rectangle style={{ height: 'auto' }} />,
    name: 'Rectangle',
    ...shapeSounds.Rectangle,
  },
  {
    [MEDIUM]: <ShapeSvg.Star style={{ height: 'auto' }} />,
    name: 'Star',
    ...shapeSounds.Star,
  },
  {
    [MEDIUM]: <ShapeSvg.Heart style={{ height: 'auto' }} />,
    name: 'Heart',
    ...shapeSounds.Heart,
  },
  {
    [MEDIUM]: <ShapeSvg.Triangle style={{ height: 'auto' }} />,
    name: 'Triangle',
    ...shapeSounds.Triangle,
  },
];
