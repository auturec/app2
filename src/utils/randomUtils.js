export const getRandomElement = items => {
  return items[Math.floor(Math.random() * items.length)];
};

export const getNRandomElements = (items, n) => {
  const copy = items.slice();
  // eslint-disable-next-line no-unused-vars
  copy.sort((_a, _b) => 0.5 - Math.random());
  return copy.slice(0, n);
};

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * referencing https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * from https://stackoverflow.com/users/310500/laurens-holst
 */
export const shuffleArray = original => {
  const array = original.slice();
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
