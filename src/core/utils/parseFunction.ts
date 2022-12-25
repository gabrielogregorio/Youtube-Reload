const ONE_T: number = 1000000000000;
const ONE_B: number = 1000000000;
const ONE_M: number = 1000000;
const ONE_K: number = 1000;

export const parseFunction = (value: string): number | undefined => {
  const valueToUse: string = value.toLowerCase() || '';

  if (valueToUse.endsWith('t')) {
    return Number(valueToUse.slice(0, valueToUse.length - 1)) * ONE_T;
  }

  if (valueToUse.endsWith('b')) {
    return Number(valueToUse.slice(0, valueToUse.length - 1)) * ONE_B;
  }

  if (valueToUse.endsWith('m')) {
    return Number(valueToUse.slice(0, valueToUse.length - 1)) * ONE_M;
  }

  if (valueToUse.endsWith('k')) {
    return Number(valueToUse.slice(0, valueToUse.length - 1)) * ONE_K;
  }

  if (Number(valueToUse)) {
    return Number(valueToUse);
  }

  return undefined;
};
