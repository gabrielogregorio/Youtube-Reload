export const shuffleArray = <T>(array: T[]): T[] => {
  const arrayFinal = [...array];
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [arrayFinal[currentIndex], arrayFinal[randomIndex]] = [arrayFinal[randomIndex], arrayFinal[currentIndex]];
  }

  return arrayFinal;
};
