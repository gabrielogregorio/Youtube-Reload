/* eslint-disable no-magic-numbers */

export enum MonthsNormalizedEnum {
  'January' = 1,
  'February' = 2,
  'March' = 3,
  'April' = 4,
  'May' = 5,
  'June' = 6,
  'July' = 7,
  'August' = 8,
  'September' = 9,
  'October' = 10,
  'November' = 11,
  'December' = 12,
}

export const getMonthFrom1To12 = (): MonthsNormalizedEnum => {
  return new Date().getMonth() + 1;
};

export const getUtcDay = (): number => {
  return new Date().getUTCDate();
};
