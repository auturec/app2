export const getNumberOfEqualOptions = (firstSet, secondSet) => {
  return firstSet.filter((o) => secondSet.indexOf(o) !== -1).length;
};
