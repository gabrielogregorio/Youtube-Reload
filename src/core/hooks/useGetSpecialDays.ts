import type { ISpecialDate } from '@/data/specialDates';
import { specialDates } from '@/data/specialDates';
import type { MonthsNormalizedEnum } from '@/utils/date';
import { getMonthFrom1To12, getUtcDay } from '@/utils/date';
import { useEffect, useState } from 'react';

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
    const actualMonth: MonthsNormalizedEnum = getMonthFrom1To12();
    const actualDay: number = getUtcDay();
    const listSpecialDates: ISpecialDate[] = specialDates[actualMonth].filter((specialDay: ISpecialDate) => {
      return specialDay.days.includes(actualDay);
    });

    setNowSpecialDays(listSpecialDates);
    setQuantitySpecialDays(listSpecialDates.length);
  }, []);

  const nextSpecialDay = (): void => {
    setSpecialDaySelected((prev: number) => {
      if (prev + 1 >= quantitySpecialDays) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSpecialDay = (): void => {
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
