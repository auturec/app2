import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { useToasts } from 'react-toast-notifications';

import {
  getRandomElement,
  getNRandomElements,
  shuffleArray,
} from 'utils/randomUtils';
import { ImageMap, ImageKeyList } from './GameImages';
import MainImage from './MainImage';
import MultipleOptions from './MultipleOptions';

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
    themes: getNRandomElements(ImageKeyList, 4),
  });
  const [currentTheme] = useState({
    theme: getRandomElement(allTheme.themes),
  });
  const [answerPair] = useState({
    pair: getRandomPairFromArray(ImageMap[currentTheme.theme]),
  });

  const initGame = (usedTheme, answerTheme) => {
    return usedTheme.map((val) => {
      if (val === answerTheme) {
        return { image: answerPair.pair.second, theme: answerTheme };
      }
      return { image: getRandomElement(ImageMap[val]), theme: val };
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
