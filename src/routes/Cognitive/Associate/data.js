import React from 'react';

import { MEDIUM } from 'constants/difficulties';
import * as AssociateSvg from 'assets/images/associate';
import { associateSounds } from './sounds';

export const associateData = [
  {
    [MEDIUM]: <AssociateSvg.Bike style={{ height: 'auto' }} />,
    name: 'Bike',
    ...associateSounds.bike,
  },
  {
    [MEDIUM]: <AssociateSvg.Carpet style={{ height: 'auto' }} />,
    name: 'Carpet',
    ...associateSounds.carpet,
  },
  {
    [MEDIUM]: <AssociateSvg.Chair style={{ height: 'auto' }} />,
    name: 'Chair',
    ...associateSounds.chair,
  },
  {
    [MEDIUM]: <AssociateSvg.Cow style={{ height: 'auto' }} />,
    name: 'Cow',
    ...associateSounds.cow,
  },
  {
    [MEDIUM]: <AssociateSvg.Crab style={{ height: 'auto' }} />,
    name: 'Crab',
    ...associateSounds.crab,
  },
  {
    [MEDIUM]: <AssociateSvg.Deer style={{ height: 'auto' }} />,
    name: 'Deer',
    ...associateSounds.deer,
  },
  {
    [MEDIUM]: <AssociateSvg.Grandfatherclock style={{ height: 'auto' }} />,
    name: 'GrandfatherClock',
    ...associateSounds.grandfatherclock,
  },
  {
    [MEDIUM]: <AssociateSvg.Hen style={{ height: 'auto' }} />,
    name: 'Chicken',
    ...associateSounds.chicken,
  },
  {
    [MEDIUM]: <AssociateSvg.Pig style={{ height: 'auto' }} />,
    name: 'Pig',
    ...associateSounds.pig,
  },
  // {
  //   [MEDIUM]: <AssociateSvg.Scooter style={{ height: 'auto' }} />,
  //   name: 'Scooter',
  //   ...associateSounds.scooter,
  // },
  {
    [MEDIUM]: <AssociateSvg.Standlamp style={{ height: 'auto' }} />,
    name: 'Lamp',
    ...associateSounds.lamp,
  },
  {
    [MEDIUM]: <AssociateSvg.Tablelamp style={{ height: 'auto' }} />,
    name: 'TableLamp',
    ...associateSounds.tablelamp,
  },
  // {
  //   [MEDIUM]: <AssociateSvg.Train style={{ height: 'auto' }} />,
  //   name: 'Train',
  //   ...associateSounds.train,
  // },
  {
    [MEDIUM]: <AssociateSvg.Truck style={{ height: 'auto' }} />,
    name: 'Truck',
    ...associateSounds.truck,
  },
  {
    [MEDIUM]: <AssociateSvg.Wheel style={{ height: 'auto' }} />,
    name: 'Wheel',
    ...associateSounds.wheel,
  },
];
