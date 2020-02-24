export const SIGNIN = '/signin';
export const SIGNUP = '/signup';
export const FORUM = '/forum';
export const FORUM_ID = '/forum/:id';
export const TESTIMONIAL = '/testimonial';
export const PROFILE = '/profile';
export const FAQ = '/faq';
export const ONBOARDING = '/';

export const publicRoutes = [
  {
    path: ONBOARDING,
    name: 'Home',
    protected: false,
  },
  {
    path: TESTIMONIAL,
    name: 'Testimonial',
    protected: false,
  },
  {
    path: FORUM,
    name: 'Forum',
    protected: false,
  },
  {
    path: FAQ,
    name: 'FAQ',
    protected: false,
  },
  {
    path: SIGNIN,
    name: 'SignIn',
    protected: false,
  },
]
  
export const privateRoutes = [
  {
    path: PROFILE,
    name: 'Profile',
    protected: true,
  },
  {
    path: SIGNIN,
    name: 'SignIn',
    protected: false,
  },
]