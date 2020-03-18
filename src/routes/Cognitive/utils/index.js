/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * referencing https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * from https://stackoverflow.com/users/310500/laurens-holst
 */
const shuffleArray = original => {
  const array = original.slice();
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getRandomFromArray = array => {
  const ranId = Math.floor(array.length * Math.random());
  return array[ranId];
};

export const getFourList = array => {
  const copy = array.slice();
  const shuffled = shuffleArray(copy);
  return shuffled.slice(0, 4);
};

export const getRandomPairFromArray = array => {
  const randomArray = shuffleArray(array);
  const firstTwo = randomArray.slice(0, 2);
  return {
    first: firstTwo[0],
    second: firstTwo[firstTwo.length - 1]
  };
};

export default {
  shuffleArray,
  getRandomFromArray,
  getFourList,
  getRandomPairFromArray
};
