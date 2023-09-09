const SUBTRACT_TO_CONSIDER_NEGATIVE_NUMBER = 0.5;

export const generateRandomPositiveZeroOrNegative = () => {
  return Math.random() - SUBTRACT_TO_CONSIDER_NEGATIVE_NUMBER;
};
