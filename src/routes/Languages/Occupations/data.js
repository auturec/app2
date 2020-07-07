import React from 'react';

import { MEDIUM } from 'constants/difficulties';
import * as OccupationMediumSvg from 'assets/images/occupations/medium';
import { occupationSounds } from './sounds';

export const occupationData = [
  {
    [MEDIUM]: <OccupationMediumSvg.Astronaut style={{ height: 'auto' }} />,
    name: 'Astronaut',
    ...occupationSounds.astronaut,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Baker style={{ height: 'auto' }} />,
    name: 'Baker',
    ...occupationSounds.baker,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Barber style={{ height: 'auto' }} />,
    name: 'Barber',
    ...occupationSounds.barber,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Cashier style={{ height: 'auto' }} />,
    name: 'Cashier',
    ...occupationSounds.cashier,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Chef style={{ height: 'auto' }} />,
    name: 'Chef',
    ...occupationSounds.chef,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Doctor style={{ height: 'auto' }} />,
    name: 'Doctor',
    ...occupationSounds.doctor,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Farmer style={{ height: 'auto' }} />,
    name: 'Farmer',
    ...occupationSounds.farmer,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Fireman style={{ height: 'auto' }} />,
    name: 'Fireman',
    ...occupationSounds.fireman,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Librarian style={{ height: 'auto' }} />,
    name: 'Librarian',
    ...occupationSounds.librarian,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Nurse style={{ height: 'auto' }} />,
    name: 'Nurse',
    ...occupationSounds.nurse,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Painter style={{ height: 'auto' }} />,
    name: 'Painter',
    ...occupationSounds.painter,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Pilot style={{ height: 'auto' }} />,
    name: 'Pilot',
    ...occupationSounds.pilot,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Policeman style={{ height: 'auto' }} />,
    name: 'Policeman',
    ...occupationSounds.policeman,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Scientist style={{ height: 'auto' }} />,
    name: 'Scientist',
    ...occupationSounds.scientist,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Student style={{ height: 'auto' }} />,
    name: 'Student',
    ...occupationSounds.student,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Teacher style={{ height: 'auto' }} />,
    name: 'Teacher',
    ...occupationSounds.teacher,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Vet style={{ height: 'auto' }} />,
    name: 'Vet',
    ...occupationSounds.vet,
  },
  {
    [MEDIUM]: <OccupationMediumSvg.Waiter style={{ height: 'auto' }} />,
    name: 'Waiter',
    ...occupationSounds.waiter,
  },
];
