import React from 'react';

import { EASY, MEDIUM, HARD } from 'constants/difficulties';
import * as OccupationEasy from 'assets/images/occupations/easy';
import * as OccupationMedium from 'assets/images/occupations/medium';
import * as OccupationHard from 'assets/images/occupations/hard';
import { occupationSounds } from './sounds';

export const occupationData = [
  {
    [EASY]: <OccupationEasy.Astronaut style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Astronaut style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Astronaut style={{ height: 'auto' }} />,
    name: 'Astronaut',
    ...occupationSounds.astronaut,
  },
  {
    [EASY]: <OccupationEasy.Baker style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Baker style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Baker style={{ height: 'auto' }} />,
    name: 'Baker',
    ...occupationSounds.baker,
  },
  {
    [EASY]: <OccupationEasy.Barber style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Barber style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Barber style={{ height: 'auto' }} />,
    name: 'Barber',
    ...occupationSounds.barber,
  },
  {
    [EASY]: <OccupationEasy.Cashier style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Cashier style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Cashier style={{ height: 'auto' }} />,
    name: 'Cashier',
    ...occupationSounds.cashier,
  },
  {
    [EASY]: <OccupationEasy.Chef style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Chef style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Chef style={{ height: 'auto' }} />,
    name: 'Chef',
    ...occupationSounds.chef,
  },
  {
    [EASY]: <OccupationEasy.Doctor style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Doctor style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Doctor style={{ height: 'auto' }} />,
    name: 'Doctor',
    ...occupationSounds.doctor,
  },
  {
    [EASY]: <OccupationEasy.Farmer style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Farmer style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Farmer style={{ height: 'auto' }} />,
    name: 'Farmer',
    ...occupationSounds.farmer,
  },
  {
    [EASY]: <OccupationEasy.Fireman style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Fireman style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Fireman style={{ height: 'auto' }} />,
    name: 'Fireman',
    ...occupationSounds.fireman,
  },
  {
    [EASY]: <OccupationEasy.Librarian style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Librarian style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Librarian style={{ height: 'auto' }} />,
    name: 'Librarian',
    ...occupationSounds.librarian,
  },
  {
    [EASY]: <OccupationEasy.Nurse style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Nurse style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Nurse style={{ height: 'auto' }} />,
    name: 'Nurse',
    ...occupationSounds.nurse,
  },
  {
    [EASY]: <OccupationEasy.Painter style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Painter style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Painter style={{ height: 'auto' }} />,
    name: 'Painter',
    ...occupationSounds.painter,
  },
  {
    [EASY]: <OccupationEasy.Pilot style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Pilot style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Pilot style={{ height: 'auto' }} />,
    name: 'Pilot',
    ...occupationSounds.pilot,
  },
  {
    [EASY]: <OccupationEasy.Policeman style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Policeman style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Policeman style={{ height: 'auto' }} />,
    name: 'Policeman',
    ...occupationSounds.policeman,
  },
  {
    [EASY]: <OccupationEasy.Scientist style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Scientist style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Scientist style={{ height: 'auto' }} />,
    name: 'Scientist',
    ...occupationSounds.scientist,
  },
  {
    [EASY]: <OccupationEasy.Student style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Student style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Student style={{ height: 'auto' }} />,
    name: 'Student',
    ...occupationSounds.student,
  },
  {
    [EASY]: <OccupationEasy.Teacher style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Teacher style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Teacher style={{ height: 'auto' }} />,
    name: 'Teacher',
    ...occupationSounds.teacher,
  },
  {
    [EASY]: <OccupationEasy.Vet style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Vet style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Vet style={{ height: 'auto' }} />,
    name: 'Vet',
    ...occupationSounds.vet,
  },
  {
    [EASY]: <OccupationEasy.Waiter style={{ height: 'auto' }} />,
    [MEDIUM]: <OccupationMedium.Waiter style={{ height: 'auto' }} />,
    [HARD]: <OccupationHard.Waiter style={{ height: 'auto' }} />,
    name: 'Waiter',
    ...occupationSounds.waiter,
  },
];
