import React from 'react';

import * as OccupationSvg from 'assets/images/languages/occupations';
import { occupationSounds } from './sounds';

export const occupationData = [
  {
    component: <OccupationSvg.Astronaut style={{ height: 'auto' }} />,
    name: 'Astronaut',
    ...occupationSounds.astronaut,
  },
  {
    component: <OccupationSvg.Baker style={{ height: 'auto' }} />,
    name: 'Baker',
    ...occupationSounds.baker,
  },
  {
    component: <OccupationSvg.Barber style={{ height: 'auto' }} />,
    name: 'Barber',
    ...occupationSounds.barber,
  },
  {
    component: <OccupationSvg.Cashier style={{ height: 'auto' }} />,
    name: 'Cashier',
    ...occupationSounds.cashier,
  },
  {
    component: <OccupationSvg.Chef style={{ height: 'auto' }} />,
    name: 'Chef',
    ...occupationSounds.chef,
  },
  {
    component: <OccupationSvg.Doctor style={{ height: 'auto' }} />,
    name: 'Doctor',
    ...occupationSounds.doctor,
  },
  {
    component: <OccupationSvg.Farmer style={{ height: 'auto' }} />,
    name: 'Farmer',
    ...occupationSounds.farmer,
  },
  {
    component: <OccupationSvg.Fireman style={{ height: 'auto' }} />,
    name: 'Fireman',
    ...occupationSounds.fireman,
  },
  {
    component: <OccupationSvg.Librarian style={{ height: 'auto' }} />,
    name: 'Librarian',
    ...occupationSounds.librarian,
  },
  {
    component: <OccupationSvg.Nurse style={{ height: 'auto' }} />,
    name: 'Nurse',
    ...occupationSounds.nurse,
  },
  {
    component: <OccupationSvg.Painter style={{ height: 'auto' }} />,
    name: 'Painter',
    ...occupationSounds.painter,
  },
  {
    component: <OccupationSvg.Pilot style={{ height: 'auto' }} />,
    name: 'Pilot',
    ...occupationSounds.pilot,
  },
  {
    component: <OccupationSvg.Policeman style={{ height: 'auto' }} />,
    name: 'Policeman',
    ...occupationSounds.policeman,
  },
  {
    component: <OccupationSvg.Scientist style={{ height: 'auto' }} />,
    name: 'Scientist',
    ...occupationSounds.scientist,
  },
  {
    component: <OccupationSvg.Student style={{ height: 'auto' }} />,
    name: 'Student',
    ...occupationSounds.student,
  },
  {
    component: <OccupationSvg.Teacher style={{ height: 'auto' }} />,
    name: 'Teacher',
    ...occupationSounds.teacher,
  },
  {
    component: <OccupationSvg.Vet style={{ height: 'auto' }} />,
    name: 'Vet',
    ...occupationSounds.vet,
  },
  {
    component: <OccupationSvg.Waiter style={{ height: 'auto' }} />,
    name: 'Waiter',
    ...occupationSounds.waiter,
  },
];
