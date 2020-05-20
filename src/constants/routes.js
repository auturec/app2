export const SIGNIN = '/signin';
export const SIGNUP = '/signup';
export const FORUM = '/forum';
export const FORUM_ID = '/forum/:id';
export const TESTIMONIAL = '/testimonial';
export const PROFILE = '/profile';
export const FAQ = '/faq';
export const ACCOUNT = '/account';
export const FORGOT_PASSWORD = '/forgot-password';
export const ONBOARDING = '/';

// Game Routes

// Cognitive Games
export const ASSOCIATE = '/cognitive/associate';
export const TILES = '/cognitive/tiles';
export const OCCUPATIONS = '/language/occupations';
export const WORDS = '/words';

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
    path: FORUM,
    name: 'Forum',
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
    path: OCCUPATIONS,
    name: 'Occupations',
  },
  {
    path: WORDS,
    name: 'Words',
  },
];

export const privateRoutes = [
  {
    path: PROFILE,
    name: 'Profile',
  },
  {
    path: ACCOUNT,
    name: 'Account',
  },
  {
    path: SIGNIN,
    name: 'SignIn',
  },
];
