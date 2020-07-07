import React from 'react';

import * as OccupationMediumSvg from 'assets/images/occupations/medium';
import { occupationSounds } from './sounds';

export const occupationData = [
  {
    component: <OccupationMediumSvg.Astronaut style={{ height: 'auto' }} />,
    name: 'Astronaut',
    ...occupationSounds.astronaut,
  },
  {
    component: <OccupationMediumSvg.Baker style={{ height: 'auto' }} />,
    name: 'Baker',
    ...occupationSounds.baker,
  },
  {
    component: <OccupationMediumSvg.Barber style={{ height: 'auto' }} />,
    name: 'Barber',
    ...occupationSounds.barber,
  },
  {
    component: <OccupationMediumSvg.Cashier style={{ height: 'auto' }} />,
    name: 'Cashier',
    ...occupationSounds.cashier,
  },
  {
    component: <OccupationMediumSvg.Chef style={{ height: 'auto' }} />,
    name: 'Chef',
    ...occupationSounds.chef,
  },
  {
    component: <OccupationMediumSvg.Doctor style={{ height: 'auto' }} />,
    name: 'Doctor',
    ...occupationSounds.doctor,
  },
  {
    component: <OccupationMediumSvg.Farmer style={{ height: 'auto' }} />,
    name: 'Farmer',
    ...occupationSounds.farmer,
  },
  {
    component: <OccupationMediumSvg.Fireman style={{ height: 'auto' }} />,
    name: 'Fireman',
    ...occupationSounds.fireman,
  },
  {
    component: <OccupationMediumSvg.Librarian style={{ height: 'auto' }} />,
    name: 'Librarian',
    ...occupationSounds.librarian,
  },
  {
    component: <OccupationMediumSvg.Nurse style={{ height: 'auto' }} />,
    name: 'Nurse',
    ...occupationSounds.nurse,
  },
  {
    component: <OccupationMediumSvg.Painter style={{ height: 'auto' }} />,
    name: 'Painter',
    ...occupationSounds.painter,
  },
  {
    component: <OccupationMediumSvg.Pilot style={{ height: 'auto' }} />,
    name: 'Pilot',
    ...occupationSounds.pilot,
  },
  {
    component: <OccupationMediumSvg.Policeman style={{ height: 'auto' }} />,
    name: 'Policeman',
    ...occupationSounds.policeman,
  },
  {
    component: <OccupationMediumSvg.Scientist style={{ height: 'auto' }} />,
    name: 'Scientist',
    ...occupationSounds.scientist,
  },
  {
    component: <OccupationMediumSvg.Student style={{ height: 'auto' }} />,
    name: 'Student',
    ...occupationSounds.student,
  },
  {
    component: <OccupationMediumSvg.Teacher style={{ height: 'auto' }} />,
    name: 'Teacher',
    ...occupationSounds.teacher,
  },
  {
    component: <OccupationMediumSvg.Vet style={{ height: 'auto' }} />,
    name: 'Vet',
    ...occupationSounds.vet,
  },
  {
    component: <OccupationMediumSvg.Waiter style={{ height: 'auto' }} />,
    name: 'Waiter',
    ...occupationSounds.waiter,
  },
];
