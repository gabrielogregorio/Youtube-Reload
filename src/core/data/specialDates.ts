/* eslint-disable no-magic-numbers */

import { MonthsNormalizedEnum } from '@/utils/date';

export interface ISpecialDate {
  title: string;
  description: string;
  emoji1: string;
  days: number[];
  emoji2: string;
}

export const specialDates: { [month in MonthsNormalizedEnum]: ISpecialDate[] } = {
  [MonthsNormalizedEnum.January]: [
    {
      title: 'Ano Novo',
      description: 'Feliz Ano Novo!',
      days: [1, 2],
      emoji1: '🎉🎊',
      emoji2: '✨🎆',
    },
  ],

  [MonthsNormalizedEnum.February]: [],
  [MonthsNormalizedEnum.March]: [],
  [MonthsNormalizedEnum.April]: [
    {
      title: 'Páscoa',
      description: '',
      days: [9],
      emoji1: '🐇',
      emoji2: '🐇 ',
    },
  ],
  [MonthsNormalizedEnum.May]: [],
  [MonthsNormalizedEnum.June]: [],
  [MonthsNormalizedEnum.July]: [],
  [MonthsNormalizedEnum.August]: [],
  [MonthsNormalizedEnum.September]: [],

  [MonthsNormalizedEnum.October]: [
    {
      title: 'halloween',
      description: '',
      days: [31],
      emoji1: '🎃🎃',
      emoji2: '🎃🎃',
    },
  ],

  [MonthsNormalizedEnum.November]: [],

  [MonthsNormalizedEnum.December]: [
    {
      title: 'Dia da Astronomia',
      description: '',
      days: [2],
      emoji1: '🔭',
      emoji2: '🪐',
    },
    {
      title: 'Véspera de Natal',
      description: '',
      days: [24],
      emoji1: '🎅',
      emoji2: '',
    },
    {
      title: 'Natal',
      description: 'Feliz Natal!!',
      days: [25],
      emoji1: '🎅',
      emoji2: '🎄',
    },

    {
      title: 'Véspera de Ano-Novo',
      description: 'Está chegando um novo Ano!',
      days: [31],
      emoji1: '🎈',
      emoji2: '🎊',
    },
  ],
};
