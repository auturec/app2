import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';

import Onboarding from 'routes/Onboarding';
import Testimonial from 'routes/Testimonial';
import Faq from 'routes/Faq';

// Games Components
import Associate from 'routes/Cognitive/Associate';
import Occupations from 'routes/Languages/Occupations';
import Numbers from 'routes/Numbers';
import Words from 'routes/Languages/Words';
import Colors from 'routes/Cognitive/Colors';
import Shapes from 'routes/Shapes';
import TilesDrag from 'routes/TilesDrag';

import {
  TESTIMONIAL,
  FAQ,
  ONBOARDING,
  ASSOCIATE,
  OCCUPATIONS,
  NUMBERS,
  COLORS,
  WORDS,
  SHAPES,
  JUST_TILES,
} from 'constants/routes';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={ONBOARDING} component={Onboarding} />
        <Route exact path={TESTIMONIAL} component={Testimonial} />
        <Route exact path={FAQ} component={Faq} />
        <Route exact path={ASSOCIATE} component={Associate} />
        <Route exact path={OCCUPATIONS} component={Occupations} />
        <Route exact path={NUMBERS} component={Numbers} />
        <Route exact path={WORDS} component={Words} />
        <Route exact path={COLORS} component={Colors} />
        <Route exact path={SHAPES} component={Shapes} />
        <Route exact path={JUST_TILES} component={TilesDrag} />
      </Switch>
    </Router>
  );
};

export default App;
