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

export const publicRoutes = [
  {
    path: ONBOARDING,
    name: 'Home',
  },
  {
    path: TESTIMONIAL,
    name: 'Testimonial',
  },
  {
    path: FAQ,
    name: 'FAQ',
  },
  {
    path: ASSOCIATE,
    name: 'Associate',
  },
  {
    path: TILES,
    name: 'Tiles',
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
];
