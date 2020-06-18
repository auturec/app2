import React from 'react';

import * as AssociateSvg from 'assets/images/associate';
import { associateSounds } from './sounds';

export const associateData = [
  {
    component: <AssociateSvg.Bike style={{ height: 'auto' }} />,
    name: 'Bike',
    ...associateSounds.bike,
  },
  {
    component: <AssociateSvg.Carpet style={{ height: 'auto' }} />,
    name: 'Carpet',
    ...associateSounds.carpet,
  },
  {
    component: <AssociateSvg.Chair style={{ height: 'auto' }} />,
    name: 'Chair',
    ...associateSounds.chair,
  },
  {
    component: <AssociateSvg.Cow style={{ height: 'auto' }} />,
    name: 'Cow',
    ...associateSounds.cow,
  },
  {
    component: <AssociateSvg.Crab style={{ height: 'auto' }} />,
    name: 'Crab',
    ...associateSounds.crab,
  },
  {
    component: <AssociateSvg.Deer style={{ height: 'auto' }} />,
    name: 'Deer',
    ...associateSounds.deer,
  },
  {
    component: <AssociateSvg.Grandfatherclock style={{ height: 'auto' }} />,
    name: 'GrandfatherClock',
    ...associateSounds.grandfatherclock,
  },
  {
    component: <AssociateSvg.Hen style={{ height: 'auto' }} />,
    name: 'Chicken',
    ...associateSounds.chicken,
  },
  {
    component: <AssociateSvg.Pig style={{ height: 'auto' }} />,
    name: 'Pig',
    ...associateSounds.pig,
  },
  // {
  //   component: <AssociateSvg.Scooter style={{ height: 'auto' }} />,
  //   name: 'Scooter',
  //   ...associateSounds.scooter,
  // },
  {
    component: <AssociateSvg.Standlamp style={{ height: 'auto' }} />,
    name: 'Lamp',
    ...associateSounds.lamp,
  },
  {
    component: <AssociateSvg.Tablelamp style={{ height: 'auto' }} />,
    name: 'TableLamp',
    ...associateSounds.tablelamp,
  },
  // {
  //   component: <AssociateSvg.Train style={{ height: 'auto' }} />,
  //   name: 'Train',
  //   ...associateSounds.train,
  // },
  {
    component: <AssociateSvg.Truck style={{ height: 'auto' }} />,
    name: 'Truck',
    ...associateSounds.truck,
  },
  {
    component: <AssociateSvg.Wheel style={{ height: 'auto' }} />,
    name: 'Wheel',
    ...associateSounds.wheel,
  },
];
