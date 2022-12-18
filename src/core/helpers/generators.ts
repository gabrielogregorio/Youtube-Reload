const SUBTRACT_TO_CONSIDER_NEGATIVE_NUMBER: number = 0.5;

export const generateRandomPositiveZeroOrNegative = (): number => {
  return Math.random() - SUBTRACT_TO_CONSIDER_NEGATIVE_NUMBER;
};
