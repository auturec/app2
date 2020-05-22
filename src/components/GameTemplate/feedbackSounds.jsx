import UIFx from 'uifx';

import greatJobOneMp3 from 'assets/sounds/game-feedback/great-job-1.mp3';
import greatJobTwoMp3 from 'assets/sounds/game-feedback/great-job-2.mp3';
import goodJobMp3 from 'assets/sounds/game-feedback/good-job.mp3';
import wellDoneMp3 from 'assets/sounds/game-feedback/well-done.mp3';
import amazingMp3 from 'assets/sounds/game-feedback/amazing.mp3';
import excellentMp3 from 'assets/sounds/game-feedback/excellent.mp3';
import wrongMp3 from 'assets/sounds/game-feedback/wrong.mp3';

const greatJobOneSound = new UIFx(greatJobOneMp3);
const greatJobTwoSound = new UIFx(greatJobTwoMp3);
const goodJobSound = new UIFx(goodJobMp3);
const wellDoneSound = new UIFx(wellDoneMp3);
const amazingSound = new UIFx(amazingMp3);
const excellentSound = new UIFx(excellentMp3);

export const positiveFeedbackSounds = [
  {
    sound: greatJobOneSound,
    phrase: 'GREAT JOB!',
  },
  {
    sound: greatJobTwoSound,
    phrase: 'GREAT JOB!',
  },
  {
    sound: goodJobSound,
    phrase: 'GOOD JOB!',
  },
  {
    sound: wellDoneSound,
    phrase: 'WELL DONE!',
  },
  {
    sound: amazingSound,
    phrase: 'AMAZING!',
  },
  {
    sound: excellentSound,
    phrase: 'EXCELLENT!',
  },
];

export const negativeFeedbackSound = new UIFx(wrongMp3);
