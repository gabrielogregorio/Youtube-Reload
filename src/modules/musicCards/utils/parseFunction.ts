const ONE_T = 1000000000000;
const ONE_B = 1000000000;
const ONE_M = 1000000;
const ONE_K = 1000;

export const LARGE_VALUE = 99999999999;

export const parseFunction = (value?: string) => {
  const valueToUse = value?.toLowerCase() || '';
  if (value === 'all') {
    return LARGE_VALUE;
  }

  if (value === '0') {
    return 0;
  }

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
    return Number(valueToUse) || 1;
  }

  return 1;
};
