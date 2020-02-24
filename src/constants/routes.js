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
]
  
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
]