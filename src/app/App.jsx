import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import NavBar from '../components/NavBar'

import Onboarding from '../routes/Onboarding';
import Forum from '../routes/Forum';
import ForumPost from '../routes/ForumPost'
import Testimonial from '../routes/Testimonial';
import Faq from '../routes/Faq';
import Profile from '../routes/Profile';
import Signin from '../routes/Signin';
import Signup from '../routes/Signup';

import {
  SIGNIN,
  SIGNUP,
  FORUM,
  FORUM_ID,
  TESTIMONIAL,
  PROFILE,
  FAQ,
  ONBOARDING,
} from '../constants/routes'

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path={ONBOARDING} exact component={Onboarding} />
        <Route path={SIGNIN} component={Signin} />
        <Route path={SIGNUP} component={Signup} />
        <Route path={FORUM} component={Forum} />
        <Route path={FORUM_ID} component={ForumPost} />
        <Route path={TESTIMONIAL} component={Testimonial} />
        <Route path={PROFILE} component={Profile} />
        <Route path={FAQ} component={Faq} />
      </Switch>
    </Router>
  );
}

export default App;
