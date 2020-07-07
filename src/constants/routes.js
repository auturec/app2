export const TESTIMONIAL = '/testimonial';
export const FAQ = '/faq';
export const ONBOARDING = '/';

// Game Routes

// Cognitive Games
export const ASSOCIATE = '/cognitive/associate';
export const TILES = '/cognitive/tiles';
export const COLORS = '/cognitive/colors';
export const OCCUPATIONS = '/language/occupations';
export const NUMBERS = '/numbers';
export const WORDS = '/language/words';
export const SHAPES = '/shapes';
export const JUST_TILES = '/tiles';

export const publicRoutes = [
  {
    path: TESTIMONIAL,
    name: 'Testimonial',
  },
  {
    path: FAQ,
    name: 'FAQ',
  },
];

export const gameRoutes = [
  {
    path: ASSOCIATE,
    name: 'Associate',
  },
  {
    path: COLORS,
    name: 'Colors',
  },
  {
    path: OCCUPATIONS,
    name: 'Occupations',
  },
  {
    path: NUMBERS,
    name: 'Numbers',
  },
  {
    path: WORDS,
    name: 'Words',
  },
  {
    path: SHAPES,
    name: 'Shapes',
  },
  {
    path: JUST_TILES,
    name: 'Tiles',
  },
];

export const allRoutes = new Map([
  [TESTIMONIAL, 'Testimonial'],
  [FAQ, 'FAQ'],
  [ONBOARDING, 'Home'],
  [ASSOCIATE, 'Game: Associate'],
  [TILES, 'Game: Tiles'],
  [JUST_TILES, 'Game: Tiles'],
  [COLORS, 'Game: Colors'],
  [OCCUPATIONS, 'Game: Occupations'],
  [NUMBERS, 'Game: Numbers'],
  [WORDS, 'Game: Words'],
  [SHAPES, 'Game: Shapes'],
]);
