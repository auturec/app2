import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { useToasts } from 'react-toast-notifications';

import { ImageMap, ImageKeyList } from './GameImages';
import MainImage from './MainImage';
import MultipleOptions from './MultipleOptions';

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * referencing https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * from https://stackoverflow.com/users/310500/laurens-holst
 */
const shuffleArray = (original) => {
  const array = original.slice();
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomFromArray = (array) => {
  const ranId = Math.floor(array.length * Math.random());
  return array[ranId];
};

const getFourList = (array) => {
  const copy = array.slice();
  const shuffled = shuffleArray(copy);
  return shuffled.slice(0, 4);
};

const getRandomPairFromArray = (array) => {
  const randomArray = shuffleArray(array);
  const firstTwo = randomArray.slice(0, 2);
  return {
    first: firstTwo[0],
    second: firstTwo[firstTwo.length - 1],
  };
};

/*  
  Game logic works by first selecting 4 random themes.
  From those 4 themes, choose 1 answer theme.
  choose a pair from the answer theme, and 1 pic from the other 3 themes.
  display all the times, checking if correct on click.
*/

const AssociateGame = () => {
  const { addToast } = useToasts();
  const [allTheme] = useState({
    themes: getFourList(ImageKeyList),
  });
  const [currentTheme] = useState({
    theme: getRandomFromArray(allTheme.themes),
  });
  const [answerPair] = useState({
    pair: getRandomPairFromArray(ImageMap[currentTheme.theme]),
  });

  const initGame = (usedTheme, answerTheme) => {
    return usedTheme.map((val) => {
      if (val === answerTheme) {
        return { image: answerPair.pair.second, theme: answerTheme };
      }
      return { image: getRandomFromArray(ImageMap[val]), theme: val };
    });
  };

  const [gameState] = useState({
    state: initGame(allTheme.themes, currentTheme.theme),
  });

  const handleOnClick = (e, category) => {
    e.preventDefault();
    if (category === currentTheme.theme) {
      addToast(`Correct to match ${category}!`, {
        appearance: 'success',
        autoDismiss: true,
      });
    } else {
      addToast(`Wrong Category, Please try again!`, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <MainImage
        image={answerPair.pair.first}
        choosenTheme={currentTheme.theme}
      />
      <MultipleOptions gameState={gameState} handleOnClick={handleOnClick} />
    </Container>
  );
};

export default AssociateGame;
