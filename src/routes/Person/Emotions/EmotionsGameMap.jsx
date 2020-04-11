import HAPPY1 from 'assets/images/emotions/happy/happy1.svg';
import HAPPY2 from 'assets/images/emotions/happy/happy2.svg';
import HAPPY3 from 'assets/images/emotions/happy/happy3.svg';

import SAD1 from 'assets/images/emotions/sad/sad1.svg';
import SAD2 from 'assets/images/emotions/sad/sad2.svg';
import SAD3 from 'assets/images/emotions/sad/sad3.svg';

import ANGRY1 from 'assets/images/emotions/angry/angry1.svg';
import ANGRY2 from 'assets/images/emotions/angry/angry2.svg';
import ANGRY3 from 'assets/images/emotions/angry/angry3.svg';

import AFRAID1 from 'assets/images/emotions/afraid/afraid1.svg';
import AFRAID2 from 'assets/images/emotions/afraid/afraid2.svg';
import AFRAID3 from 'assets/images/emotions/afraid/afraid3.svg';

const HappyList = [HAPPY1, HAPPY2, HAPPY3];

const SadList = [SAD1, SAD2, SAD3];

const AngryList = [ANGRY1, ANGRY2, ANGRY3];

const AfraidList = [AFRAID1, AFRAID2, AFRAID3];

export const getListWithEmotion = emotion => {
  if (emotion === 'happy') {
    return HappyList;
  } if (emotion === 'sad') {
    return SadList;
  } if (emotion === 'angry') {
    return AngryList;
  } if (emotion === 'afraid') {
    return AfraidList;
  } 
    throw SyntaxError('invalid emotion');
  
};

export default { getListWithEmotion };
