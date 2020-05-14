import React from 'react';

// I recommend importing all these into an sounds.js file and export it out as an object
// refer to how routes/Occupations is doing it
import touchSampleMp3 from 'assets/sounds/touch-sample.mp3';
import thisIsSampleMp3 from 'assets/sounds/this-is-sample.mp3';

// list of objects
const sampleOptions = [
  {
    component: <div>1</div>, // component must be a JSX element, e.g. <svg>, <img>, or just <div>
    name: 1, // this will be displayed on top, e.g. TOUCH 1
    touchSound: touchSampleMp3, // this will be played when the options first display
    thisIsSound: thisIsSampleMp3, // this will be played when child gets two wrong in a row and the correct answer is given
  },
  {
    component: <div>2</div>,
    name: 2,
    touchSound: touchSampleMp3,
    thisIsSound: thisIsSampleMp3,
  },
  // and so on...
];

export { sampleOptions };
