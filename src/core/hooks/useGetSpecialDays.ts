import type { IRandomPhrase } from '@/data/randomPhrase';
import { randomPhrase } from '@/data/randomPhrase';
import type { ISpecialDate } from '@/data/specialDates';
import { specialDates } from '@/data/specialDates';
import type { MonthsNormalizedEnum } from '@/utils/date';
import { DateReload } from '@/utils/date';
import { generateRandomPositiveZeroOrNegative } from '@/utils/generators';
import { useEffect, useState } from 'react';

const defaultSpecialDay: ISpecialDate = {
  title: 'Bem vindo',
  description: 'Aqui você pode conhecer músicas perdidas (ou não)',
  days: [],
  emoji1: '🕵',
  emoji2: '',
};

export const useGetSpecialDays = (): {
  specialDays: ISpecialDate | undefined;
  quantitySpecialDays: number;
  specialDaySelected: number;
  nextSpecialDay: () => void;
  prevSpecialDay: () => void;
} => {
  const [nowSpecialDays, setNowSpecialDays] = useState<ISpecialDate[]>([]);
  const [specialDaySelected, setSpecialDaySelected] = useState<number>(0);
  const [quantitySpecialDays, setQuantitySpecialDays] = useState<number>(0);

  useEffect(() => {
    const actualMonth: MonthsNormalizedEnum = DateReload.getMonthFrom1To12();
    const actualDay: number = DateReload.getDay();
    const listSpecialDates: ISpecialDate[] = specialDates[actualMonth].filter((specialDay: ISpecialDate) => {
      return specialDay.days.includes(actualDay);
    });

    const phrases: IRandomPhrase = [...randomPhrase].sort((): number => generateRandomPositiveZeroOrNegative())[0];
    listSpecialDates.push({
      title: phrases.author,
      description: phrases.description,
      emoji1: '🍀',
      emoji2: '',
      days: [],
    });

    listSpecialDates.push(defaultSpecialDay);

    setNowSpecialDays(listSpecialDates);
    setQuantitySpecialDays(listSpecialDates.length);
  }, []);

  const nextSpecialDay = () => {
    setSpecialDaySelected((prev: number) => {
      if (prev + 1 >= quantitySpecialDays) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSpecialDay = () => {
    setSpecialDaySelected((prev: number) => {
      if (prev - 1 < 0) {
        return quantitySpecialDays - 1;
      }
      return prev - 1;
    });
  };

  return {
    specialDays: nowSpecialDays[specialDaySelected],
    nextSpecialDay,
    prevSpecialDay,
    quantitySpecialDays,
    specialDaySelected,
  };
};
